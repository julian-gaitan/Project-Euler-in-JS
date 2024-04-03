
const listOfAbundantNum = [];

function sumOfNonAbundantNumbers(n) {

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (isAbundantNumber(i)) {
      listOfAbundantNum.push(i);
    }
    sum += i;
    if (listOfAbundantNum.length) {
      for (let d = listOfAbundantNum.length - 1; listOfAbundantNum[d] >= i / 2; d--) {
        let result;
        for (let u = 0; u <= d; u++) {
          result = listOfAbundantNum[d] + listOfAbundantNum[u];
          if (result >= i) {
            break;
          }
        }
        if (result == i) {
          sum -= i;
          break;
        }
      }
    }
  }
  return sum;
}

function isAbundantNumber(n) {
  let sum = 1;
  let limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if ((n % i) == 0) {
      sum += i;
      if (i < limit) {
        sum += n / i;
      }
    }
  }
  return sum > n;
}

console.log(sumOfNonAbundantNumbers(28123));
