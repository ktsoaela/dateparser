// advanced.js
const moment = require('moment');
const chrono = require('chrono-node');

class AdvancedDateParserJS {
    constructor(format = "YYYY-MM-DD") {
        this.format = format;
    }

    parse(input) {
        input = input.toLowerCase().trim();

        // Support for today, tomorrow, and yesterday
        if (input === "today") return moment().format(this.format);
        if (input === "tomorrow") return moment().add(1, "days").format(this.format);
        if (input === "yesterday") return moment().subtract(1, "days").format(this.format);

        // Relative date parsing (e.g., "3 days from now", "1 week ago")
        const relativeMatch = input.match(/(\d+)\s+(day|week|month|year)s?\s+(ago|from now)/);
        if (relativeMatch) {
            const [, num, unit, direction] = relativeMatch;
            return moment()[direction === "ago" ? "subtract" : "add"](parseInt(num), unit).format(this.format);
        }

        // Weekday parsing (e.g., "next Monday", "last Tuesday")
        const weekdayMatch = input.match(/(next|last)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/);
        if (weekdayMatch) {
            const [, direction, day] = weekdayMatch;
            const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            const targetDay = moment().day(weekdays.indexOf(day));

            return direction === "next"
                ? targetDay.add(7, "days").format(this.format)
                : targetDay.subtract(7, "days").format(this.format);
        }

        // Advanced parsing using chrono-node
        const chronoResult = chrono.parseDate(input);
        if (chronoResult) {
            return moment(chronoResult).format(this.format);
        }

        // Handling common relative dates like 'next month', 'end of the week'
        const specialMatch = input.match(/(next|last|end of|start of)\s+(month|week|quarter|year)/);
        if (specialMatch) {
            const [, direction, period] = specialMatch;
            switch (period) {
                case "month":
                    return direction === "next"
                        ? moment().add(1, "months").startOf("month").format(this.format)
                        : moment().subtract(1, "months").endOf("month").format(this.format);

                case "week":
                    if (direction === "next") {
                        return moment().add(1, "weeks").startOf("week").format(this.format);
                    } else if (direction === "last") {
                        return moment().subtract(1, "weeks").startOf("week").format(this.format);
                    } else if (direction === "start of") {
                        return moment().startOf("week").format(this.format);
                    } else if (direction === "end of") {
                        return moment().endOf("week").format(this.format);
                    }
                    break;

                case "quarter":
                    if (direction === "next") {
                        return moment().add(1, "quarters").startOf("quarter").format(this.format);
                    } else if (direction === "last") {
                        return moment().subtract(1, "quarters").startOf("quarter").format(this.format);
                    } else if (direction === "start of") {
                        return moment().startOf("quarter").format(this.format);
                    } else if (direction === "end of") {
                        return moment().endOf("quarter").format(this.format);
                    }
                    break;

                case "year":
                    if (direction === "next") {
                        return moment().add(1, "years").startOf("year").format(this.format);
                    } else if (direction === "last") {
                        return moment().subtract(1, "years").startOf("year").format(this.format);
                    } else if (direction === "start of") {
                        return moment().startOf("year").format(this.format);
                    } else if (direction === "end of") {
                        return moment().endOf("year").format(this.format);
                    }
                    break;
                default:
                    return "Invalid date expression";
            }
        }

        return "Invalid date expression";
    }
}

module.exports = AdvancedDateParserJS;
