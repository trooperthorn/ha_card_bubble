// Fork tests (ha_card_bubble): a sub-button that falls back to its entity's
// friendly name escapes it; an author-written name is kept. See
// fork/escape-text.js.
import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));
jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));
// Modules that touch window at load or are not under test, mocked as in
// upstream's utils.test.js; tools/utils.js stays real for getAttribute.
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({ applyScrollingEffect: jest.fn() }));
jest.unstable_mockModule('../../tools/icon.js', () => ({
    getIcon: jest.fn(),
    getLightColorSignature: jest.fn(),
    getImage: jest.fn(),
    getIconColor: jest.fn(),
}));
jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions: jest.fn(),
    addFeedback: jest.fn(),
}));
jest.unstable_mockModule('../../tools/validate-condition.js', () => ({
    checkConditionsMet: jest.fn(),
    validateConditionalConfig: jest.fn(),
    ensureArray: jest.fn((v) => (v === undefined ? [] : [].concat(v))),
}));

const { getSubButtonOptions } = await import('./utils.js');

function context(friendlyName) {
    return {
        config: { entity: 'light.hall' },
        _hass: { states: { 'light.hall': { entity_id: 'light.hall', state: 'on', attributes: { friendly_name: friendlyName } } } },
    };
}

describe('sub-button names', () => {
    test("an entity's friendly name is escaped", () => {
        expect(getSubButtonOptions(context('<b>x</b>'), { entity: 'light.hall' }, 0).name).toBe('&lt;b&gt;x&lt;/b&gt;');
    });

    test('an author-written name is kept as written', () => {
        expect(getSubButtonOptions(context('Ignored'), { entity: 'light.hall', name: '<i>Hall</i>' }, 0).name).toBe('<i>Hall</i>');
    });
});
