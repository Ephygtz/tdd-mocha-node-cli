const assert = require('assert');
const operations = require('./operations.js');

// it('should return true', () =>{
// 	assert.equal(true, true);
// });
it('correctly calculates the sum of 1 and 3', () =>{
	assert.equal(operations.add(1,3), 4);
});

it('correctly calculates the sum of -1 and -1', () =>{
	assert.equal(operations.add(-1, -1), -2);
});

it('correctly calculates the difference of 33 and 3', () =>{
	assert.equal(operations.subtract(33, 3), 30);
});

it('correctly calculates the product of 12 and 12', () =>{
	assert.equal(operations.multiply(12, 12), 144);
});

it('correctly calculates the quotient of 10 and 2', () =>{
	assert.equal(operations.divide(10, 2), 5);
});

it('indicates failure when a string is used instead of a number', () => {
	assert.equal(operations.validateNumbers('Ephra', 2), false);
});

it('indicates failure when two strings are used instead of numbers', () => {
	assert.equal(operations.validateNumbers('Ephra', 'ephy'), false);
});

it('successfully runs when two numbers are used', () => {
	assert.equal(operations.validateNumbers(7, 10), true);
});