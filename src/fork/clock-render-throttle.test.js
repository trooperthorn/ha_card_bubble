import { describe, expect, test } from '@jest/globals';
import { skipClockDrivenTick, CLOCK_RENDER_MIN_MS } from './clock-render-throttle.js';

const SHARED = { themes: {}, locale: {}, config: {} };
const hassWith = (states) => ({ states, ...SHARED });
function card(states, config = { card_type: 'media-player', entity: 'media_player.tv' }) {
    const hass = hassWith(states);
    const el = { config, _hass: hass, _renderGate: { config, clockDriven: true, entities: ['media_player.tv'], snapshot: { states: new Map() }, at: 0 } };
    expect(skipClockDrivenTick(el, 0)).toBe(false); // first tick: let through, remembered
    return el;
}

describe('clock-driven cards on hass ticks', () => {
    test('drop a tick that changed nothing they read within the window', () => {
        const tv = { state: 'playing' };
        const el = card({ 'media_player.tv': tv });
        el._hass = hassWith({ 'media_player.tv': tv, 'sensor.noise': { state: '1' } });
        expect(skipClockDrivenTick(el, CLOCK_RENDER_MIN_MS - 1)).toBe(true);
    });
    test('render once the window has passed', () => {
        const tv = { state: 'playing' };
        const el = card({ 'media_player.tv': tv });
        el._hass = hassWith({ 'media_player.tv': tv });
        expect(skipClockDrivenTick(el, CLOCK_RENDER_MIN_MS)).toBe(false);
    });
    test('render a tick that changed their own entity', () => {
        const el = card({ 'media_player.tv': { state: 'playing' } });
        el._hass = hassWith({ 'media_player.tv': { state: 'paused' } });
        expect(skipClockDrivenTick(el, 10)).toBe(false);
    });
    test('render a tick that changed a calendar they list', () => {
        const config = { card_type: 'calendar', entities: [{ entity: 'calendar.home' }] };
        const el = card({ 'calendar.home': { state: 'off' } }, config);
        el._renderGate.entities = [];
        el._hass = hassWith({ 'calendar.home': { state: 'on' } });
        expect(skipClockDrivenTick(el, 10)).toBe(false);
    });
    test('render a tick that changed anything outside states', () => {
        const tv = { state: 'playing' };
        const el = card({ 'media_player.tv': tv });
        el._hass = { ...hassWith({ 'media_player.tv': tv }), themes: { darkMode: true } };
        expect(skipClockDrivenTick(el, 10)).toBe(false);
    });
    test('never touch a card that is not clock driven, or one being edited', () => {
        const tv = { state: 'playing' };
        const el = card({ 'media_player.tv': tv });
        el._hass = hassWith({ 'media_player.tv': tv });
        expect(skipClockDrivenTick({ ...el, editor: true }, 10)).toBe(false);
        expect(skipClockDrivenTick({ ...el, _renderGate: { ...el._renderGate, clockDriven: false } }, 10)).toBe(false);
    });
});
