const { assert: { isFunction, equal } } = require("chai");
const divide = require('../calculator/divide');

describe('division module', () => { 

    describe('divide', () => {
        it('should be a function', () => {
            isFunction(divide);
        })
        it('should return the quotient of two numbers', () => {
            equal(25, divide(100, 4));
        })
    })
})