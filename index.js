// index.js

// Import the Simple and Advanced Date Parsers
const DateParserJS = require('./src/simple');
const AdvancedDateParserJS = require('./src/advanced');

// Export the classes for use in other modules
module.exports = {
    DateParserJS,
    AdvancedDateParserJS
};

// Optional: Export default instances if you want to provide a quick start
module.exports.defaultSimpleParser = new DateParserJS();
module.exports.defaultAdvancedParser = new AdvancedDateParserJS();
