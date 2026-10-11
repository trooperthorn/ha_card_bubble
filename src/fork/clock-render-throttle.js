// Fork patch (ha_card_bubble): clock-driven cards render at most once a second
// for hass ticks that changed nothing they read.
//
// render-gate.js never skips a media player, a calendar, or anything showing a
// timer, because what they show can move with the clock while their state
// objects stay identical. That made them render on EVERY state change in the
// installation: on the wall tablets the three media players cost more per tick
// than the other 75 dashboard cards together. The clock only needs sampling,
// not one render per unrelated hass tick, so a tick that changed nothing the
// card read is dropped when the card rendered less than a second ago. A tick
// that did change something it reads renders exactly as before.
//
// Reads the gate's own bookkeeping (`_renderGate`, `_renderReads`) so the
// dependency set is the same one render-gate.js trusts. No imports: this runs
// under upstream's bubble-card unit tests in a bare node environment.
export const CLOCK_RENDER_MIN_MS = 1000;

export function skipClockDrivenTick(element, now) {
    const gate = element?._renderGate;
    const hass = element?._hass;
    if (!gate || !gate.clockDriven || !gate.snapshot || !hass?.states) return false;
    if (gate.config !== element.config) return false;
    if (element.editor || element._preview || element.detectedEditor) return false;

    const last = element._clockTickHass;
    const fresh = now - gate.at < CLOCK_RENDER_MIN_MS && last && last !== hass && sameOutsideStates(last, hass);
    if (fresh && sameReadStates(element, gate, last, hass)) return true;

    element._clockTickHass = hass;
    return false;
}

function sameOutsideStates(previous, hass) {
    let count = 0;
    for (const key in hass) {
        count++;
        if (key !== 'states' && hass[key] !== previous[key]) return false;
    }
    for (const key in previous) count--;
    return count === 0;
}

// Compared with the hass of the last tick let through, which is the one that
// rendered or an older one, so any doubt resolves to rendering.
function sameReadStates(element, gate, last, hass) {
    const reads = element._renderReads;
    if (reads?.all) return false;
    const before = last.states;
    const now = hass.states;
    for (const entity of gate.entities) if (before[entity] !== now[entity]) return false;
    if (reads) for (const entity of reads.ids) if (before[entity] !== now[entity]) return false;
    // A calendar names its entities in a list the gate does not collect.
    const listed = element.config?.entities;
    if (Array.isArray(listed)) {
        for (const item of listed) {
            const entity = typeof item === 'string' ? item : item?.entity;
            if (entity && before[entity] !== now[entity]) return false;
        }
    }
    return true;
}
