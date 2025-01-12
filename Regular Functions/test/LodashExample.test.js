const { findMaxValue, filterValues,nameInCapital } = require('../src/LodashExample');

describe('findMaxValue', () => {
  it('should return the maximum value in a number array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = findMaxValue(input);
    expect(result).toBe(5); // Assert the maximum value
  });

  it('should return undefined for an empty array', () => {
    const input = [];
    const result = findMaxValue(input);
    expect(result).toBeUndefined(); // Assert undefined for empty array
  });

  it('should handle an array with negative numbers', () => {
    const input = [-10, -20, -5, -30];
    const result = findMaxValue(input);
    expect(result).toBe(-5); // Assert max negative value
  });
});

describe('filterValues', () => {
    it('should return values greater than the second parameter', () => {
      const input = [10, 20, 30, 40];
      const num = 25;
      const result = filterValues(input, num);
      expect(result).toEqual([30, 40]); // Assert filtered values
    });
  
    it('should return an empty array if no values are greater', () => {
      const input = [1, 2, 3];
      const num = 5;
      const result = filterValues(input, num);
      expect(result).toEqual([]); // Assert empty array
    });
  
    it('should handle negative numbers correctly', () => {
      const input = [-10, -20, -5, 0, 5];
      const num = -6;
      const result = filterValues(input, num);
      expect(result).toEqual([-5, 0, 5]); // Assert filtered values
    });
  });

  describe('nameInCapital', () => {
    it('should return all names in uppercase', () => {
      const input = ['Alice', 'Bob', 'Charlie'];
      const result = nameInCapital(input);
      expect(result).toEqual(['ALICE', 'BOB', 'CHARLIE']); // Assert uppercase values
    });
  
    it('should handle an empty array', () => {
      const input = [];
      const result = nameInCapital(input);
      expect(result).toEqual([]); // Assert empty array
    });
  
    it('should handle mixed case inputs', () => {
      const input = ['alice', 'BOB', 'Charlie'];
      const result = nameInCapital(input);
      expect(result).toEqual(['ALICE', 'BOB', 'CHARLIE']); // Assert correct uppercase transformation
    });
  
    it('should handle an array with special characters or numbers', () => {
      const input = ['@lice', 'B0b', 'Char1ie'];
      const result = nameInCapital(input);
      expect(result).toEqual(['@LICE', 'B0B', 'CHAR1IE']); // Assert correct uppercase transformation
    });
  });

