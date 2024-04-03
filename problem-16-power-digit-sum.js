
function powerDigitSum(exponent) {

  let number = [2];
  let limit = 1e10;
  for (let n = 1; n < exponent; n++) {
    for (let i = 0; i < number.length; i++) {
      number[i] *= 2;
    }
    for (let i = 0; i < number.length; i++) {
      if (number[i] > limit) {
        if (!number[i + 1]) {
          number[i + 1] = 0;
        }
        number[i + 1] += Math.floor(number[i] / limit);
        number[i] %= limit;
      }
    }
  }
  return number.reduce((pre, cur) => {
    let sum = 0;
    while (cur > 0) {
      sum += cur % 10;
      cur = Math.floor(cur / 10);
    }
    return sum + pre;
  }, 0);
}

console.log(powerDigitSum(1000));