
function sumAmicableNum(n) {

    let sum = 0;
    for (let i = 2; i <= n; i++) {
        let result1 = findSumOfDivisors(i);
        if (i == result1) {
            continue;
        }
        let result2 = findSumOfDivisors(result1);
        if (i == result2 && result1 > i) {
            sum += i + result1;
        }
    }
    return sum;
}

function findSumOfDivisors(n) {
    let sum = 1;
    let limit = Math.sqrt(n);
    for (let i = 2; i <= limit; i++) {
      if ((n % i) == 0) {
        sum += i;
        if (i < limit) {
            sum += n/i;
        }
      }
    }
    return sum;
}

console.log(sumAmicableNum(10000));
