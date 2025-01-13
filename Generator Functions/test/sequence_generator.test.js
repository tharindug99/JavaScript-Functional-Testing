const { generateSequence } = require('../src/sequence_generator');

// sequence_generator.test.js

describe('generateSequence', () => {
    test('should generate a sequence from start to end', () => {
        const start = 1;
        const end = 5;
        const sequence = generateSequence(start, end);
        const result = [...sequence];
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should generate an empty sequence if start is greater than end', () => {
        const start = 5;
        const end = 1;
        const sequence = generateSequence(start, end);
        const result = [...sequence];
        expect(result).toEqual([]);
    });

    test('should generate a sequence with a single number if start equals end', () => {
        const start = 3;
        const end = 3;
        const sequence = generateSequence(start, end);
        const result = [...sequence];
        expect(result).toEqual([3]);
    });

    test('should handle negative numbers correctly', () => {
        const start = -3;
        const end = 3;
        const sequence = generateSequence(start, end);
        const result = [...sequence];
        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3]);
    });

    test('should handle zero correctly', () => {
        const start = 0;
        const end = 3;
        const sequence = generateSequence(start, end);
        const result = [...sequence];
        expect(result).toEqual([0, 1, 2, 3]);
    });
});
