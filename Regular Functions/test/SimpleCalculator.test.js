const { addNumbers, subNumbers, mulNumbers, divNumbers } = require('../src/SimpleCalculator');

describe('SimpleCalculator', () => {
    describe('addNumbers', () => {
        it('should add two numbers correctly', () => {
            expect(addNumbers(1, 2)).toBe(3);
            expect(addNumbers(-1, -1)).toBe(-2);
            expect(addNumbers(0, 0)).toBe(0);
        });
    });

    describe('subNumbers', () => {
        it('should subtract two numbers correctly', () => {
            expect(subNumbers(5, 3)).toBe(2);
            expect(subNumbers(0, 0)).toBe(0);
            expect(subNumbers(-1, -1)).toBe(0);
        });
    });

    describe('mulNumbers', () => {
        it('should multiply two numbers correctly', () => {
            expect(mulNumbers(2, 3)).toBe(6);
            expect(mulNumbers(-2, -3)).toBe(6);
            expect(mulNumbers(0, 5)).toBe(0);
        });
    });

    describe('divNumbers', () => {
        it('should divide two numbers correctly', () => {
            expect(divNumbers(6, 3)).toBe(2);
            expect(divNumbers(-6, -3)).toBe(2);
            expect(divNumbers(0, 1)).toBe(0);
        });

        it('should return an error message when dividing by zero', () => {
            expect(divNumbers(6, 0)).toBe("Please provide valid numbers..!");
        });
    });
});