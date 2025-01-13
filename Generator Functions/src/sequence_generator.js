function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i; // Pause and return the current value
    }
}

const sequence = generateSequence(1, 5);

for (const value of sequence) {
    console.log(value); // Logs 1, 2, 3, 4, 5
}


module.exports = { generateSequence };

