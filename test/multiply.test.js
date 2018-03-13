const { assert: { isFunction, equal } } = require("chai");
const multiply = require('../calculator/multiply.js');

describe('mulitplication module', () => {

    describe('multiply', () => {
        it('should be a function', () => {
            isFunction(multiply);
        })
        it('should return the result of multiplying two numbers', () => {
            equal(100, multiply(25, 4));
        })
        
    })
})