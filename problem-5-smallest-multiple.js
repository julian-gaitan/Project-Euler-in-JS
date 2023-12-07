function smallestMult(n) {

  let numFactors = [2];
  for (let i = 3; i <= n; i++) {
    let factors = findPrimeFactors(i);
    for (let x = 0, y = 0; x < factors.length; x++) {
      while (factors[x] > numFactors[y]) {
          y++;
          if (numFactors.length == y) {
            numFactors.push(factors[x]);
          }
        }
      if (factors[x] < numFactors[y]) {
        numFactors = [...numFactors.slice(0, y), 
					 factors[x], 
					 ...numFactors.slice(y)];
      }
      y++;
    }
  }
  return numFactors.reduce((prev, curr) => prev * curr);
}

let primes = [2, 3];

function findPrimeFactors(number) {
  let factors = [];
  let prime;
  let pIndex = 0;
  while (number > 1) {
    if (pIndex < primes.length) {
      prime = primes[pIndex];
    } else {
      prime += 2;
    }
    while (number % prime == 0) {
      number /= prime;
      factors.push(prime);
      if (!primes.includes(prime)) {
        primes.push(prime);
      }
    }
    pIndex++;
  }
  return factors;
}

console.log(smallestMult(20));