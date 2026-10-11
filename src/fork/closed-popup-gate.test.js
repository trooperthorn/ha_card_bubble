import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import { isIdleClosedStandalonePopUp } from './closed-popup-gate.js';

const realLocation = globalThis.location;
const realPerformance = globalThis.performance;
let now = 1000;
beforeEach(() => { globalThis.location = { hash: '' }; now = 1000; globalThis.performance = { now: () => now }; });
afterEach(() => { globalThis.location = realLocation; globalThis.performance = realPerformance; });

const classList = (...names) => { const s = new Set(names); return { contains: (n) => s.has(n) }; };
function closedPopUp(overrides = {}) {
    return {
        config: { card_type: 'pop-up', hash: '#kitchen', cards: [] },
        cardType: 'pop-up', isStandalonePopUp: true, isConnected: true,
        refreshPopupShell() {}, _wakeSyncRegistered: true, _registeredHash: '#kitchen', _lastRenderAt: 900,
        popUp: { parentNode: null, classList: classList('is-popup-closed') },
        ...overrides,
    };
}

describe('a closed standalone pop-up', () => {
    test('skips, and marks its shell for refresh on the next open', () => {
        const el = closedPopUp();
        expect(isIdleClosedStandalonePopUp(el)).toBe(true);
        expect(el._standaloneNeedsShellRefresh).toBe(true);
    });
    test.each([
        ['legacy pop-up', { config: { card_type: 'pop-up', hash: '#kitchen' } }],
        ['not initialised yet', { cardType: undefined }],
        ['never had a full pass', { _wakeSyncRegistered: false }],
        ['in the editor', { editor: true }],
        ['a preview', { _preview: true }],
        ['detached', { isConnected: false }],
        ['with a trigger', { config: { card_type: 'pop-up', hash: '#kitchen', cards: [], trigger: [{ condition: 'state' }] } }],
        ['with a legacy trigger', { config: { card_type: 'pop-up', hash: '#kitchen', cards: [], trigger_entity: 'binary_sensor.door', trigger_state: 'on' } }],
        ['with background_update', { config: { card_type: 'pop-up', hash: '#kitchen', cards: [], background_update: true } }],
        ['with its cards active', { _standalonePopUpCardsActive: true }],
        ['holding an open flush', { _pendingOpenSettledUpdate: true }],
        ['waiting for its host chain', { _popupHostChainIncomplete: true }],
        ['not registered for its hash', { _registeredHash: null }],
        ['with its shell attached', { popUp: { parentNode: {}, classList: classList('is-popup-closed') } }],
        ['mid-transition', { popUp: { parentNode: null, classList: classList('is-popup-closed', 'is-closing') } }],
        ['without the deferred refresh hook', { refreshPopupShell: null }],
    ])('renders when %s', (_label, overrides) => {
        expect(isIdleClosedStandalonePopUp(closedPopUp(overrides))).toBe(false);
    });
    test('renders when the URL already names it', () => {
        globalThis.location = { hash: '#kitchen' };
        expect(isIdleClosedStandalonePopUp(closedPopUp())).toBe(false);
    });
    test('renders once its skip bound has run out', () => {
        now = 900 + 30001;
        expect(isIdleClosedStandalonePopUp(closedPopUp())).toBe(false);
    });
});
