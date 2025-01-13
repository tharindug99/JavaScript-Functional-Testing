const { mainGenerator, subGenerator } = require('../src/delegate_generator');


describe('Generator Functions', () => {
    describe('subGenerator', () => {
        test('should yield "A" and "B"', () => {
            const gen = subGenerator();
            expect(gen.next().value).toBe("A");
            expect(gen.next().value).toBe("B");
            expect(gen.next().done).toBe(true);
        });
    });

    describe('mainGenerator', () => {
        test('should yield 1, delegate to subGenerator, and then yield 3', () => {
            const gen = mainGenerator();
            expect(gen.next().value).toBe(1);
            expect(gen.next().value).toBe("A");
            expect(gen.next().value).toBe("B");
            expect(gen.next().value).toBe(3);
            expect(gen.next().done).toBe(true);
        });

        test('should return an array [1, "A", "B", 3] when spread', () => {
            const gen = mainGenerator();
            expect([...gen]).toEqual([1, "A", "B", 3]);
        });
    });
});
