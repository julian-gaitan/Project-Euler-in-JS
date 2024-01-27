
function sumFactorialDigits(n) {

    const limit = 1e10;
    let number = [n];
    for (let i = n-1; i > 1; i--) {
        for (let x = 0; x < number.length; x++) {
            number[x] *= i;
        }
        for (let x = 0; x < number.length; x++) {
            if (number[x] > limit) {
                if (!number[x+1]) {
                    number[x+1] = 0;
                }
                number[x+1] += Math.floor(number[x] / limit);
                number[x] %= limit;
            }
        }
    }
    return number.reduce((prev, curr) => {
        let value = 0;
        while (curr > 0) {
            value += curr % 10;
            curr = Math.floor(curr / 10);
        }
        return prev + value;
    }, 0);
}
  
console.log(sumFactorialDigits(100));
