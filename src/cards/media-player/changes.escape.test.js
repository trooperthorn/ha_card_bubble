// Fork tests (ha_card_bubble): media metadata is escaped before the scrolling
// text writes it as markup. See fork/escape-text.js.
import { describe, expect, jest, test } from '@jest/globals';

const written = [];
jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));
jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect: (context, element, text) => written.push([element.id, text]),
}));

const { changeMediaInfo } = await import('./changes.js');

describe('media player title and description', () => {
    test('stream metadata is written as text, not markup', () => {
        const context = {
            config: { entity: 'media_player.radio' },
            _hass: {
                states: {
                    'media_player.radio': {
                        state: 'playing',
                        attributes: { media_title: '<b>x</b>', media_artist: 'A & B', media_content_type: 'music' },
                    },
                },
            },
            elements: { title: { id: 'title', style: {} }, artist: { id: 'artist', style: {} } },
        };
        changeMediaInfo(context);
        expect(written).toEqual([
            ['title', '&lt;b&gt;x&lt;/b&gt;'],
            ['artist', 'A &amp; B'],
        ]);
    });
});
