const { assert: { isFunction, equal } } = require("chai");
const subtract = require('../calculator/subtract.js');

describe('subtraction module', () => { 

    describe('subtract', () => {
        it('should be a function', () => {
            isFunction(subtract);
        })
        it('should return the result of subtracting two numbers', () => {
            equal(5, subtract(10, 5));
        })
    })
})