'use strict'

let parseString = require('xml2js').parseString;

// test xml line
let xml = " <root>Hello xml2js!</root>"

parseString(xml, {trim: true}, function (err, result) {

    console.dir(result);
});


// For more information, Reach out of website below:
// https://github.com/Leonidas-from-XIV/node-xml2js