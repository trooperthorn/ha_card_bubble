// Fork tests (ha_card_bubble): the calendar refreshes its events on a state
// change or every 15 minutes, without timers that outlive the card.
import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const changeEventList = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('./changes.js', () => ({
    changeEventList,
    changeEvents: jest.fn(),
    changeStyle: jest.fn(),
}));
jest.unstable_mockModule('./create.js', () => ({ createStructure: jest.fn() }));
jest.unstable_mockModule('../../components/sub-button/changes.js', () => ({ changeSubButtons: jest.fn() }));

const { handleCalendar } = await import('./index.js');

function createContext(state = { state: 'off', attributes: {} }) {
    return {
        cardType: 'calendar',
        config: { entities: [{ entity: 'calendar.home' }] },
        _hass: { states: { 'calendar.home': state } },
    };
}

describe('calendar event refresh', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2026-10-11T12:00:00Z'));
        changeEventList.mockClear();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('fetches on the first render and schedules no timer', () => {
        handleCalendar(createContext());
        expect(changeEventList).toHaveBeenCalledTimes(1);
        expect(jest.getTimerCount()).toBe(0);
    });

    test('does not refetch for an unrelated update within 15 minutes', () => {
        const context = createContext();
        handleCalendar(context);
        jest.advanceTimersByTime(14 * 60 * 1000);
        handleCalendar(context);
        expect(changeEventList).toHaveBeenCalledTimes(1);
    });

    test('refetches on the first update after 15 minutes', () => {
        const context = createContext();
        handleCalendar(context);
        jest.advanceTimersByTime(15 * 60 * 1000);
        handleCalendar(context);
        expect(changeEventList).toHaveBeenCalledTimes(2);
    });

    test('refetches immediately when a calendar state changes', () => {
        const context = createContext();
        handleCalendar(context);
        context._hass = { states: { 'calendar.home': { state: 'on', attributes: {} } } };
        handleCalendar(context);
        expect(changeEventList).toHaveBeenCalledTimes(2);
    });

    test('state changes leave no timers behind', () => {
        const context = createContext();
        for (let i = 0; i < 5; i++) {
            context._hass = { states: { 'calendar.home': { state: i % 2 ? 'on' : 'off', attributes: { i } } } };
            handleCalendar(context);
        }
        expect(changeEventList).toHaveBeenCalledTimes(5);
        expect(jest.getTimerCount()).toBe(0);
    });
});
