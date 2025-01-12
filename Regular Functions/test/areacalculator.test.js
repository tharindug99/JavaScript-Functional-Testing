// __tests__/areaCalculator.test.js
const { calculateArea } = require('../src/areacalculator'); // Adjust the path based on your directory structure

describe('calculateArea', () => {
  test('should calculate the area of a circle when a valid radius is provided', () => {
    const choice = 'circle';
    const radius = 5;
    const result = calculateArea(choice, null, null, null, radius);
    expect(result).toBeCloseTo(78.5); // 3.14 * 5 * 5
  });

  test('should return -1 for a circle when radius is null', () => {
    const choice = 'circle';
    const result = calculateArea(choice, null, null, null, null);
    expect(result).toBe(-1);
  });

  test('should calculate the area of a square when a valid side is provided', () => {
    const choice = 'square';
    const side = 4;
    const result = calculateArea(choice, side, null, null, null);
    expect(result).toBe(16); // 4 * 4
  });

  test('should return -1 for a square when side is null', () => {
    const choice = 'square';
    const result = calculateArea(choice, null, null, null, null);
    expect(result).toBe(-1);
  });

  test('should calculate the area of a rectangle when valid length and breadth are provided', () => {
    const choice = 'rectangle';
    const length = 6;
    const breadth = 3;
    const result = calculateArea(choice, null, length, breadth, null);
    expect(result).toBe(18); // 6 * 3
  });

  test('should return -1 for a rectangle when length or breadth is null', () => {
    const choice = 'rectangle';
    const result = calculateArea(choice, null, null, null, null);
    expect(result).toBe(-1);
  });

  test('should return -1 for an unsupported shape choice', () => {
    const choice = 'triangle';
    const result = calculateArea(choice, null, null, null, null);
    expect(result).toBe(-1);
  });
});
