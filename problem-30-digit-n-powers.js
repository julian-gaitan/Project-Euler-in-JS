
function digitnPowers(n) {

  let total = 0;
  const num = [0, 1];
  let minLimit, maxLimit;
  while ((minLimit = num[num.length - 1] * Math.pow(10, num.length - 1)) <
    (maxLimit = (num.length - 1) * Math.pow(9, n) + Math.pow(num[num.length - 1], n))) {
    const val = num.reduce((prev, curr, i) =>
      prev + curr * Math.pow(10, i)
      , 0);
    const sum = num.reduce((prev, curr, i) =>
      prev + Math.pow(curr, n)
      , 0);
    let diff = val - sum;
    // console.log(`val:${val}, sum:${sum}, diff:${diff}`);
    if (diff > 0) {
      let count = 1;
      while (diff - count * Math.pow(9, n) > 0) {
        count++;
      }
      incrementNum(num, Math.pow(10, count - 1));
    } else if (diff < 0) {
      incrementNum(num, 10 - num[0]);
    } else {
      total += val;
      // console.log(`¡VAL:${val}, SUM:${sum}!`);
      incrementNum(num, 1);
    }
  }
  return total;
}

function incrementNum(num, inc) {
  num[0] += inc;
  for (let i = 0; i < num.length; i++) {
    let last;
    if ((last = num[i]) >= 10) {
      num[i] = last % 10;
      num[i + 1] = (num[i + 1] ?? 0) + Math.trunc(last / 10);
    }
  }
}

console.log(digitnPowers(5));