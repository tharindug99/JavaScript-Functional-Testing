function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++; // Pause and return the current value
    }
}

const numbers = infiniteNumbers();

module.exports = { infiniteNumbers };
