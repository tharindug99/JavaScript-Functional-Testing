function* subGenerator() {
    yield "A";
    yield "B";
}

function* mainGenerator() {
    yield 1;
    yield* subGenerator(); // Delegate to subGenerator
    yield 3;
}

const gen = mainGenerator();
console.log([...gen]); // [1, 'A', 'B', 3]

module.exports = {  subGenerator, mainGenerator };
