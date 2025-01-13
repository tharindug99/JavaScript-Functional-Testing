// Import the function
const { myGenerator } = require('../src/generator'); // Adjust the path as per your project structure

describe('myGenerator', () => {
  it('should yield the values 1, 2, and 3 in sequence', () => {
    // Setup
    const generator = myGenerator();

    // Execution and Assertions
    expect(generator.next().value).toBe(1); // First yield
    expect(generator.next().value).toBe(2); // Second yield
    expect(generator.next().value).toBe(3); // Third yield
    expect(generator.next().done).toBe(true); // Generator should be done after the last yield
  });
});
