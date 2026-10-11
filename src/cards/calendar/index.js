import { changeEventList, changeEvents } from './changes.js'
import { changeSubButtons } from "../../components/sub-button/changes.js";
import { createStructure } from './create.js';
import { changeStyle } from './changes.js'

const CALENDAR_REFRESH_MS = 1000 * 60 * 15;

export function handleCalendar(context) {
  if (context.cardType !== `calendar`) {
    createStructure(context);
  }

  const cacheKey = JSON.stringify(context.config.entities.map(e => context._hass?.states?.[e.entity])); 

  // Fork patch (ha_card_bubble): refresh at least every 15 minutes, by
  // timestamp. Upstream started a new 15-minute setTimeout on every calendar
  // state change and never cleared the previous one, so each pending timer kept
  // a removed card alive until it fired. The calendar renders on every hass
  // update (tools/render-gate.js), so the refresh still lands on the first
  // update after the interval, as it did when the timer cleared the key.
  const now = Date.now();
  const refreshDue = now - (context._calendarFetchedAt ?? 0) >= CALENDAR_REFRESH_MS;

  if (context.cacheKey !== cacheKey || refreshDue) {
    context.cacheKey = cacheKey;
    context._calendarFetchedAt = now;

    changeEventList(context).then(() => {
      changeEvents(context);
    });
  }

  changeStyle(context);
  changeSubButtons(context);
}