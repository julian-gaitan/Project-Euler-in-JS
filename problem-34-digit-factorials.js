const oneDigitFactorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function digitFactorial() {

  const numbers = [];
  // After 2540160 (9! * 7) it will be imposible for a possible number
  const limit = oneDigitFactorial[9] * 7;
  for (let n = 3; n <= limit; n++) {
    const nDecompose = decomposeNumber(n);
    const sumOfFactoiralDigit = nDecompose.reduce((p, c) => p + oneDigitFactorial[c], 0);
    if (sumOfFactoiralDigit === n) {
      numbers.push(n);
    }
  }
  const sum = numbers.reduce((p, c) => p + c, 0);
  return { sum, numbers };
}

function decomposeNumber(number) {
  let result = [];
  while (number > 0) {
    result.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}

console.log(digitFactorial());