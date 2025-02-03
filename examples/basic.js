const SimpleDateParserJS = require("../src/simple");
const AdvancedDateParserJS = require("../src/advanced");

// Instantiate parsers
const simpleParser = new SimpleDateParserJS();
const advancedParser = new AdvancedDateParserJS();

// Test SimpleDateParserJS
console.log("Simple Date Parser:");
console.log("Today:", simpleParser.parse("today"));
console.log("Tomorrow:", simpleParser.parse("tomorrow"));
console.log("Yesterday:", simpleParser.parse("yesterday"));
console.log("Next Monday:", simpleParser.parse("next Monday"));
console.log("3 days from now:", simpleParser.parse("3 days from now"));

// Test AdvancedDateParserJS
console.log("\nAdvanced Date Parser:");
console.log("Today:", advancedParser.parse("today"));
console.log("Tomorrow:", advancedParser.parse("tomorrow"));
console.log("Yesterday:", advancedParser.parse("yesterday"));
console.log("Next Monday:", advancedParser.parse("next Monday"));
console.log("3 days from now:", advancedParser.parse("3 days from now"));
console.log("Start of next month:", advancedParser.parse("start of next month"));
console.log("End of last week:", advancedParser.parse("end of last week"));
console.log("Start of next quarter:", advancedParser.parse("start of next quarter"));
console.log("Start of next year:", advancedParser.parse("start of next year"));
