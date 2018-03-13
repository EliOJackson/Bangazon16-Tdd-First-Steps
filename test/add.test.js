const { assert: { isFunction, equal } } = require("chai");
const add = require('../calculator/add.js');

describe('add module', () => {
    describe('add function', () => {
        it('should be a function', () => {
            isFunction(add);
        });
        it('should return the sum of numbers', () => {
            equal(2, add(1, 1));
        })
    })
});