function digitCancellingFractions() {

  let numAcc = 1;
  let denAcc = 1;
  for (let den = 12; den < 100; den++) {
    for (let num = 11; num < den; num++) {
      const numDecompose = decomposeNumber(num);
      const denDecompose = decomposeNumber(den);
      let index;
      for (let i = 0; i < denDecompose.length; i++) {
        index = numDecompose.indexOf(denDecompose[i]);
        if (index !== -1 && numDecompose[index]) {
          denDecompose.splice(i, 1);
          numDecompose.splice(index, 1);
          break;
        }
      }
      if ((numDecompose.length === 1) && (num / den === numDecompose[0] / denDecompose[0])) {
        numAcc *= numDecompose[0];
        denAcc *= denDecompose[0];
        console.log(`${num}/${den} = ${numDecompose[0]}/${denDecompose[0]}`);
      }
    }
  }
  const [numResult, denResult] = simplifyFraction(numAcc, denAcc);
  return denResult;
}

function decomposeNumber(number) {
  let result = [];
  while (number > 0) {
    result.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}

function simplifyFraction(num, den) {
  let cf = 2;
  while (num >= cf && den >= cf) {
    while (num % cf === 0 && den % cf === 0) {
      num /= cf;
      den /= cf;
    }
    cf++;
  }
  return [num, den];
}

console.log(digitCancellingFractions());