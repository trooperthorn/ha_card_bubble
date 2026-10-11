// Fork patch (ha_card_bubble): a closed standalone pop-up skips hass updates.
//
// Home Assistant hands every card a new `hass` on every state change in the
// installation. A standalone pop-up that is closed has its shell detached and
// its child cards torn down, so the full handlePopUp pass it ran on every tick
// only re-derived bookkeeping that nothing can see. Everything that can open
// it is driven by something other than the hass tick:
//   - its hash: the global URL listener (helpers.js ensureGlobalUrlListener)
//   - a direct DOM move: connectedCallback calls updateBubbleCard directly
//   - a template result: onTemplateResults renders directly
//   - the open itself refreshes the header always and the shell when
//     `_standaloneNeedsShellRefresh` is set, from the `_hass` stored on the
//     element before this gate is consulted.
// What a hass tick CAN do to a closed pop-up is open it through `trigger` /
// `trigger_entity`; those pop-ups are never skipped, so their trigger keeps
// being evaluated on every tick exactly as before.
//
// No imports on purpose: render-gate.js is loaded by upstream unit tests in a
// bare node environment, and this module must not pull the pop-up runtime in.
const CLOSED_POPUP_MAX_SKIP_MS = 30000;

export function isIdleClosedStandalonePopUp(element) {
    const config = element?.config;
    if (!config || !Array.isArray(config.cards)) return false;
    // Initialised by a first render, and still wired for a deferred refresh.
    if (element.cardType !== 'pop-up' || !element.isStandalonePopUp) return false;
    if (typeof element.refreshPopupShell !== 'function') return false;
    // One full pass after initialisation registers it for wake sync.
    if (!element._wakeSyncRegistered) return false;
    if (!element.isConnected || element.editor || element._preview || element.detectedEditor) return false;
    if (config.background_update || config.trigger || config.trigger_entity) return false;
    if (!config.hash || typeof location === 'undefined' || config.hash === location.hash) return false;
    if (element._standalonePopUpCardsActive || element._pendingOpenSettledUpdate) return false;
    if (element._popupHostChainIncomplete) return false;
    // Still the pop-up the URL dispatcher would open for its hash.
    if (element._registeredHash !== config.hash) return false;
    // Like the render gate, never skip indefinitely: one full pass every 30 s
    // bounds whatever this reasoning missed to that interval.
    if (typeof performance !== 'undefined' && performance.now() - (element._lastRenderAt ?? -Infinity) > CLOSED_POPUP_MAX_SKIP_MS) return false;

    // Closed and settled: shell detached, no transition under way.
    const popUp = element.popUp;
    if (!popUp || popUp.parentNode) return false;
    const classes = popUp.classList;
    if (!classes.contains('is-popup-closed') || classes.contains('is-popup-opened') ||
        classes.contains('is-opening') || classes.contains('is-closing')) return false;

    // What handlePopUp's inactive branch records on every tick: the next open
    // must rebuild the shell styles from the hass it opens with.
    element._standaloneNeedsShellRefresh = true;
    return true;
}
