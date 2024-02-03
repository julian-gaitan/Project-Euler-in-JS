
const range = 10;

function lexicographicPermutations(n) {

    let result = "";
    let limit = factorial(range), divisor;
    let values = [...Array(range).keys()];
    while (limit > 1) {
        divisor = limit / values.length;
        let index = Math.floor((n % limit) / divisor);
        limit = divisor;
        result += values[index];
        values.splice(index, 1);
    }
    return Number.parseInt(result+values[0]);
}

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(lexicographicPermutations(999999));
