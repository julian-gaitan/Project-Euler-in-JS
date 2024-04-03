
let recurringCycle;

function reciprocalCycles(n) {

  let longesRecurringCycle = 0;
  for (let i = 2; i <= n; i++) {
    // console.log(i);
    let result = divisionAsArray(1, i);
    // console.log(result);
    if (recurringCycle > longesRecurringCycle) {
      longesRecurringCycle = recurringCycle;
      // console.log(`      new max: ${longesRecurringCycle}`);
    }
  }
  return longesRecurringCycle + 1;
}

function divisionAsArray(dividend, divisor) {
  if (divisor == 0) return Number.NaN;
  recurringCycle = 0;
  const result = [0];
  while (dividend) {
    if (dividend >= divisor) {
      result[result.length - 1] = Math.floor(dividend / divisor);
      dividend = dividend % divisor;
      if (result.length > divisor * 2) {
        if ((recurringCycle = checkRecurringCycle(result)) > 0) {
          return result;
        } else {
          // console.log(`      missing the limit, divisor: ${divisor}, numberOfResults: ${result.length}`);
        }
      }
    } else {
      dividend *= 10;
      result.push(0);
    }
  }
  // console.log(`no cycle`);
  return result;
}

function checkRecurringCycle(arr) {
  for (let half = 1; half <= Math.ceil((arr.length - 1) / 4); half++) {
    let i = 0;
    for (i = 0; i + half <= Math.ceil((arr.length - 1) / 2); i += half) {
      let j = 0;
      for (j = arr.length - 1 - i; j > arr.length - 1 - i - half; j--) {
        if (arr[j] != arr[j - half]) {
          break;
        }
      }
      if (j > arr.length - 1 - i - half) {
        break;
      }
    }
    if (i + half > Math.ceil((arr.length - 1) / 2)) {
      // console.log(`recurring cycle: ${half}`);
      return half;
    }
  }
  return 0;
}

console.log(reciprocalCycles(1000));
