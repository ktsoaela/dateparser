const DateParserJS = require("../src/simple");
const AdvancedDateParserJS = require('../src/advanced.js');
const moment = require('moment');

describe("DateParserJS", () => {
    const parser = new DateParserJS();

    test("should parse 'today' correctly", () => {
        expect(parser.parse("today")).toBe(new Date().toISOString().split("T")[0]);
    });

    test("should parse 'tomorrow' correctly", () => {
        const expected = new Date(Date.now() + 86400000).toISOString().split("T")[0];
        expect(parser.parse("tomorrow")).toBe(expected);
    });

    test("should parse 'yesterday' correctly", () => {
        const expected = new Date(Date.now() - 86400000).toISOString().split("T")[0];
        expect(parser.parse("yesterday")).toBe(expected);
    });

    test("should parse '3 days from now' correctly", () => {
        const expected = new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0];
        expect(parser.parse("3 days from now")).toBe(expected);
    });

    test("should return 'Invalid date expression' for unknown input", () => {
        expect(parser.parse("unknown input"))
            .toBe("Invalid date expression");
    });
});



describe('AdvancedDateParserJS', () => {
    let dateParser;

    beforeEach(() => {
        dateParser = new AdvancedDateParserJS();
    });

    test('should return today\'s date for "today"', () => {
        const today = moment().format("YYYY-MM-DD");
        expect(dateParser.parse('today')).toBe(today);
    });

    test('should return tomorrow\'s date for "tomorrow"', () => {
        const tomorrow = moment().add(1, 'days').format("YYYY-MM-DD");
        expect(dateParser.parse('tomorrow')).toBe(tomorrow);
    });

    test('should return yesterday\'s date for "yesterday"', () => {
        const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
        expect(dateParser.parse('yesterday')).toBe(yesterday);
    });

    test('should return relative date for "3 days from now"', () => {
        const threeDaysFromNow = moment().add(3, 'days').format("YYYY-MM-DD");
        expect(dateParser.parse('3 days from now')).toBe(threeDaysFromNow);
    });

    test('should return relative date for "1 week ago"', () => {
        const oneWeekAgo = moment().subtract(1, 'week').format("YYYY-MM-DD");
        expect(dateParser.parse('1 week ago')).toBe(oneWeekAgo);
    });

    test('should return next Monday for "next Monday"', () => {
        const nextMonday = moment().day(1).add(7, 'days').format("YYYY-MM-DD");
        expect(dateParser.parse('next Monday')).toBe(nextMonday);
    });

    test('should return last Tuesday for "last Tuesday"', () => {
        const lastTuesday = moment().day(2).subtract(7, 'days').format("YYYY-MM-DD");
        expect(dateParser.parse('last Tuesday')).toBe(lastTuesday);
    });

    test('should return start of next month for "start of next month"', () => {
        const startOfNextMonth = moment().add(1, 'months').startOf('month').format("YYYY-MM-DD");
        expect(dateParser.parse('start of next month')).toBe(startOfNextMonth);
    });

    test('should return end of last week for "end of last week"', () => {
        const endOfLastWeek = moment().subtract(1, 'week').endOf('week').format("YYYY-MM-DD");
        expect(dateParser.parse('end of last week')).toBe(endOfLastWeek);
    });

    test('should return start of next quarter for "start of next quarter"', () => {
        const startOfNextQuarter = moment().add(1, 'quarters').startOf('quarter').format("YYYY-MM-DD");
        expect(dateParser.parse('start of next quarter')).toBe(startOfNextQuarter);
    });

    test('should return end of this quarter for "end of this quarter"', () => {
        const endOfThisQuarter = moment().endOf('quarter').format("YYYY-MM-DD");
        expect(dateParser.parse('end of this quarter')).toBe(endOfThisQuarter);
    });

    test('should return start of next year for "start of next year"', () => {
        const startOfNextYear = moment().add(1, 'years').startOf('year').format("YYYY-MM-DD");
        expect(dateParser.parse('start of next year')).toBe(startOfNextYear);
    });

    test('should return end of last year for "end of last year"', () => {
        const endOfLastYear = moment().subtract(1, 'years').endOf('year').format("YYYY-MM-DD");
        expect(dateParser.parse('end of last year')).toBe(endOfLastYear);
    });

    test('should return Invalid date expression for invalid input', () => {
        expect(dateParser.parse('random input')).toBe('Invalid date expression');
    });

    test('should return Invalid date expression for empty input', () => {
        expect(dateParser.parse('')).toBe('Invalid date expression');
    });
});
