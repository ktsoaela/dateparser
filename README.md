```markdown
# DateParserJS

A lightweight natural language date parser that interprets and parses common date expressions, such as:

- `"today"`
- `"tomorrow"`
- `"yesterday"`
- `"3 days from now"`
- `"next Monday"`
- `"end of the month"`

## Features

- **Simple parsing** for common relative dates like "today," "tomorrow," and "yesterday."
- **Support for advanced relative dates**, like `"3 days from now"`, `"next Monday"`, `"1 week ago"`, and more.
- **Weekday parsing** for phrases like `"next Monday"`, `"last Tuesday"`, and other variations.
- **Advanced parsing with Chrono-node**, allowing for flexible and complex date expressions.
- **Special handling** for relative periods like `"next month"`, `"start of the week"`, `"end of the quarter"`, and more.

## Installation

To get started with `DateParserJS`, you need to install the package via npm:

```bash
npm install dateparserjs
```

## Usage

### Simple Date Parser (Using `simple.js`)

The simple parser can handle basic relative dates, such as "today," "tomorrow," and "yesterday."

```javascript
const DateParserJS = require('dateparserjs/src/simple');

const parser = new DateParserJS();
console.log(parser.parse("today"));           // Returns today's date
console.log(parser.parse("tomorrow"));       // Returns tomorrow's date
console.log(parser.parse("yesterday"));      // Returns yesterday's date
console.log(parser.parse("3 days from now"));// Returns date 3 days from now
console.log(parser.parse("next Monday"));    // Returns next Monday's date
```

### Advanced Date Parser (Using `advanced.js`)

The advanced parser can handle more complex expressions like relative dates ("3 weeks ago") and specific periods ("next month", "start of the year").

```javascript
const AdvancedDateParserJS = require('dateparserjs/src/advanced');

const parser = new AdvancedDateParserJS();
console.log(parser.parse("today"));           // Returns today's date
console.log(parser.parse("tomorrow"));       // Returns tomorrow's date
console.log(parser.parse("1 week ago"));     // Returns date 1 week ago
console.log(parser.parse("next month"));     // Returns the start of next month
console.log(parser.parse("end of the week"));// Returns end of the current week
```

### Example Script

You can run an example script to see both parsers in action. In the `examples/` folder, there is a file called `basic.js` which demonstrates the usage of the parsers.

```javascript
// examples/basic.js
const SimpleDateParserJS = require('dateparserjs/src/simple');
const AdvancedDateParserJS = require('dateparserjs/src/advanced');

const simpleParser = new SimpleDateParserJS();
const advancedParser = new AdvancedDateParserJS();

console.log("Simple Parser:");
console.log("Today:", simpleParser.parse("today"));
console.log("Tomorrow:", simpleParser.parse("tomorrow"));
console.log("Yesterday:", simpleParser.parse("yesterday"));
console.log("Next Monday:", simpleParser.parse("next Monday"));
console.log("3 days from now:", simpleParser.parse("3 days from now"));

console.log("\nAdvanced Parser:");
console.log("Today:", advancedParser.parse("today"));
console.log("Tomorrow:", advancedParser.parse("tomorrow"));
console.log("1 week ago:", advancedParser.parse("1 week ago"));
console.log("Next month:", advancedParser.parse("next month"));
console.log("End of the week:", advancedParser.parse("end of the week"));
```

To run the example script, execute:

```bash
node examples/basic.js
```

## Testing

The project uses Jest for testing. To run the tests, you can execute the following command:

```bash
npm test
```

### Example Tests

You can find the test file in the `test/` folder as `dateparser.test.js`. Jest tests include checks for various date expressions and their expected outputs.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.
