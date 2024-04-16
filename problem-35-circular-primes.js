const primes = [2, 3];

function findPrimesUntilN(n) {

  while (primes[primes.length - 1] < n) {
    let number = primes[primes.length - 1] + 2;
    while (number != 0) {
      let i, limit = Math.floor(Math.sqrt(number));
      for (i = 1; primes[i] <= limit; i++) {
        if (number % primes[i] == 0) {
          break;
        }
      }
      if (primes[i] > limit) {
        primes.push(number);
        number = 0;
      } else {
        number += 2;
      }
    }
  }
  return primes;
}

function numberOfDigits(n) {
  let digits = 1;
  while (n >= Math.pow(10, digits)) {
    digits++;
  }
  return digits;
}

function rotateNumber(n) {
  return Math.pow(10, numberOfDigits(n) - 1) * (n % 10) + (Math.floor(n / 10));
}

function circularPrimes(n) {

  let total = 4;
  findPrimesUntilN(n);
  let i = 0;
  while (primes[i++] <= n) {
    const prime = primes[i];
    if (prime > 9) {
      let circularPrime = prime;
      let isCircularPrime = true;
      const limit = numberOfDigits(prime);
      let counter = 1;
      while (counter++ < limit) {
        circularPrime = rotateNumber(circularPrime);
        findPrimesUntilN(circularPrime);
        if (!primes.includes(circularPrime)) {
          isCircularPrime = false;
          break;
        }
      }
      if (isCircularPrime) {
        // console.log(prime);
        total++;
      }
    }
  }
  return total;
}

console.log(circularPrimes(1000000));