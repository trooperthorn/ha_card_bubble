// Fork tests (ha_card_bubble): entity text reaching the scrolling-text writer
// (which assigns innerHTML) is escaped, while author-written names and template
// results keep their existing behaviour. See fork/escape-text.js.
import { describe, expect, jest, test } from '@jest/globals';

// Cut the CSS import chains so tools/utils.js loads under node.
jest.unstable_mockModule('../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));
jest.unstable_mockModule('../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const { escapeText } = await import('./escape-text.js');
const { getName } = await import('../tools/utils.js');
const { renderStateLine } = await import('../components/base-card/state-line.js');

const MARKUP = '<b>x</b>';
const ESCAPED = '&lt;b&gt;x&lt;/b&gt;';

function contextWith(entity, state, attributes = {}, config = {}) {
    return {
        config: { entity, ...config },
        _hass: {
            states: { [entity]: { entity_id: entity, state, attributes } },
            formatEntityState: (s) => s.state,
            formatEntityAttributeValue: (s, attribute) => String(s.attributes[attribute]),
        },
    };
}

describe('escapeText', () => {
    test('escapes markup characters', () => {
        expect(escapeText(MARKUP)).toBe(ESCAPED);
        expect(escapeText('a & b')).toBe('a &amp; b');
    });

    test('passes plain text, numbers, and missing values through', () => {
        expect(escapeText('Kitchen')).toBe('Kitchen');
        expect(escapeText(21.5)).toBe('21.5');
        expect(escapeText(undefined)).toBeUndefined();
        expect(escapeText(null)).toBeNull();
    });
});

describe('entity names', () => {
    test('a friendly name is escaped when it is written as markup', () => {
        const context = contextWith('sensor.x', 'on', { friendly_name: MARKUP });
        expect(getName(context, true)).toBe(ESCAPED);
    });

    test('a friendly name stays raw where it is not written as markup', () => {
        const context = contextWith('sensor.x', 'on', { friendly_name: MARKUP });
        expect(getName(context, false)).toBe(MARKUP);
    });

    test('an author-written name keeps its markup, as upstream intends', () => {
        const context = contextWith('sensor.x', 'on', { friendly_name: 'Ignored' }, { name: '<i>Hall</i>' });
        expect(getName(context, true)).toBe('<i>Hall</i>');
    });
});

describe('the state line', () => {
    test('a state from an integration is escaped', () => {
        const context = contextWith('sensor.x', MARKUP);
        expect(renderStateLine(context, 'sensor.x', ['state'])).toEqual([ESCAPED]);
    });

    test('an attribute value is escaped', () => {
        const context = contextWith('sensor.x', 'on', { note: MARKUP });
        expect(renderStateLine(context, 'sensor.x', ['note'])).toEqual([ESCAPED]);
    });

    test('the fallback state shown for an empty line is escaped', () => {
        const context = contextWith('sensor.x', MARKUP);
        expect(renderStateLine(context, 'sensor.x', ['missing_attribute'])).toEqual([ESCAPED]);
    });

    test('the name item is not escaped twice', () => {
        const context = contextWith('sensor.x', 'on');
        expect(renderStateLine(context, 'sensor.x', ['name'], { name: ESCAPED })).toEqual([ESCAPED]);
    });
});
