const readStringFromFile = require("./readStringFromFile");

var re = /ab+c/i; // literal notation
var re = new RegExp('ab+c', 'i') // constructor with string pattern as first argument
var re = new RegExp(/ab+c/, 'i') // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
var testR = readStringFromFile.getStringFromFile(re);
console.log(re + " " + testR );