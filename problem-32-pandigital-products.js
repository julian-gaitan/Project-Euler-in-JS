
const pandigitalArr = [];

function incrementMultiplicantB(a, b, rest) {
  if (checkIfPandigital(a, b, rest)) {
    // console.log(`A:${a}, B:${b}, rest:${rest}`);
    const result = a * b;
    if (!pandigitalArr.includes(result)) {
      pandigitalArr.push(result);
    }
  }
  for (let i = 0; rest.length > 1 && i < rest.length; i++) {
    incrementMultiplicantB(a, 10*b + rest[i], rest.toSpliced(i, 1));
  }
}

function incrementMultiplicantA(a, rest) {
  for (let i = 0; rest.length > 1 && i < rest.length; i++) {
    const newA = 10*a + rest[i];
    const newRest = rest.toSpliced(i, 1);
    for (let j = 0; newRest.length > 1 && j < newRest.length; j++) {
      const newB = newRest[j];
      incrementMultiplicantB(newA, newB, newRest.toSpliced(j, 1));
    }
    incrementMultiplicantA(newA, rest.toSpliced(i, 1));
  }
}

function checkIfPandigital(a, b, rest) {
  const abMult = decomposeNumber(a * b);
  if (abMult.length === rest.length) {
    abMult.sort();
    const restCopy = [...rest].sort();
    for (let i = 0; i < rest.length; i++) {
      if (abMult[i] !== restCopy[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function decomposeNumber(number) {
  let result = [];
  while (number > 0) {
    result.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}

function pandigitalProducts(n) {

  incrementMultiplicantA(0, [...Array(n+1).keys()].slice(1));
  return pandigitalArr.reduce((p, c) => p + c, 0);
}

console.log(pandigitalProducts(9));
