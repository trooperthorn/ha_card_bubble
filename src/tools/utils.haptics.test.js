// Fork tests (ha_card_bubble): forwardHaptic honours the profile Vibrate option
// (upstream #2643).
import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));
jest.unstable_mockModule('../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));
jest.unstable_mockModule('./icon.js', () => ({
    getIconColor: jest.fn(() => 'var(--primary-color)'),
}));

const { forwardHaptic } = await import('./utils.js');

describe('forwardHaptic and the Vibrate profile option', () => {
    let dispatched;
    let homeAssistant;

    beforeEach(() => {
        dispatched = [];
        homeAssistant = { hass: {} };
        global.window = { dispatchEvent: (event) => dispatched.push(event) };
        global.document = { querySelector: (selector) => (selector === 'home-assistant' ? homeAssistant : null) };
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    test('fires when Vibrate is on', () => {
        homeAssistant.hass.vibrate = true;
        forwardHaptic('light');
        expect(dispatched).toHaveLength(1);
        expect(dispatched[0].type).toBe('haptic');
        expect(dispatched[0].detail).toBe('light');
    });

    test('fires when the option is not reported, as upstream always did', () => {
        forwardHaptic('selection');
        expect(dispatched).toHaveLength(1);
    });

    test('stays silent when Vibrate is off', () => {
        homeAssistant.hass.vibrate = false;
        forwardHaptic('success');
        expect(dispatched).toHaveLength(0);
    });

    test('fires when there is no home-assistant element', () => {
        homeAssistant = null;
        forwardHaptic('light');
        expect(dispatched).toHaveLength(1);
    });
});
