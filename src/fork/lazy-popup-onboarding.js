// Fork patch (ha_card_bubble): the pop-up onboarding preview is the only thing
// the dashboard runtime used from cards/pop-up/editor.js, and importing it
// statically pulled the whole pop-up, button and slider editors (~74 KB) into
// bubble-card.js. webpack.config.cjs points create.js's `./editor.js` import
// here; the real module loads with the editor chunk. The preview only shows
// in the card editor for a pop-up that has no hash yet, so rendering it a
// moment later is invisible in practice.
import { until } from 'lit/directives/until.js';

let editorModule = null;

export function renderPopupOnboarding(context) {
    editorModule ??= import(/* webpackChunkName: "editor" */ '../cards/pop-up/editor.js');
    return until(editorModule.then((m) => m.renderPopupOnboarding(context)), '');
}
