// simple.js
const moment = require("moment");

class DateParserJS {
    constructor(format = "YYYY-MM-DD") {
        this.format = format;
    }

    parse(input) {
        input = input.toLowerCase().trim();

        if (input === "today") return moment().format(this.format);
        if (input === "tomorrow") return moment().add(1, "days").format(this.format);
        if (input === "yesterday") return moment().subtract(1, "days").format(this.format);

        const relativeMatch = input.match(/(\d+)\s+(day|week|month|year)s?\s+(ago|from now)/);
        if (relativeMatch) {
            const [, num, unit, direction] = relativeMatch;
            return moment()[direction === "ago" ? "subtract" : "add"](parseInt(num), unit).format(this.format);
        }

        const weekdayMatch = input.match(/(next|last)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/);
        if (weekdayMatch) {
            const [, direction, day] = weekdayMatch;
            const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            const targetDay = moment().day(weekdays.indexOf(day));

            return direction === "next"
                ? targetDay.add(7, "days").format(this.format)
                : targetDay.subtract(7, "days").format(this.format);
        }

        return "Invalid date expression";
    }
}

module.exports = DateParserJS;
