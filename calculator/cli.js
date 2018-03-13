'use strict';

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

module.exports = (args) => {
    let num1 = +args[0];
    let num2 = +args[2];
    console.log(args[1])
    if (args.includes("x")) {
        console.log(multiply(num1, num2));
    } else if (args.includes('/')) {
        console.log(divide(num1, num2));
    } else if (args.includes('+')) {
        console.log(add(num1, num2));
    } else if (args.includes('-')) {
        console.log(subtract(num1, num2));
    } else (console.log("Make sure to follow the syntax num1 +/-* num2!"));
}