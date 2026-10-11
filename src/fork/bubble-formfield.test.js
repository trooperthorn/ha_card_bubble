// Fork tests (ha_card_bubble): the label-click behaviour of bubble-formfield,
// which mirrors ha-formfield's _labelClick at frontend 20260930.2.
import { describe, expect, jest, test } from '@jest/globals';
import { toggleFromLabel } from './bubble-formfield.js';

describe('bubble-formfield label click', () => {
    test('clicks a switch so it toggles itself and fires its own change', () => {
        const input = { tagName: 'HA-SWITCH', focus: jest.fn(), click: jest.fn(), disabled: false };
        toggleFromLabel(input);
        expect(input.focus).toHaveBeenCalled();
        expect(input.click).toHaveBeenCalled();
    });

    test('flips a checkbox and dispatches change', () => {
        const input = new EventTarget();
        Object.assign(input, { tagName: 'HA-CHECKBOX', checked: false, disabled: false, click: jest.fn() });
        const onChange = jest.fn();
        input.addEventListener('change', onChange);
        toggleFromLabel(input);
        expect(input.checked).toBe(true);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(input.click).not.toHaveBeenCalled();
    });

    test('does nothing to a disabled control', () => {
        const input = { tagName: 'HA-SWITCH', focus: jest.fn(), click: jest.fn(), disabled: true };
        toggleFromLabel(input);
        expect(input.click).not.toHaveBeenCalled();
    });

    test('tolerates a field with no control', () => {
        expect(() => toggleFromLabel(null)).not.toThrow();
    });
});
