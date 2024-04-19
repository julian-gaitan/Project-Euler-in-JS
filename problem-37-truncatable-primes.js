const primes = [2, 3];

function findNextPrime() {

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
  return primes;
}

function isTruncablePrime(prime) {
  const digits = [];
  let p = prime;

  while (p > 0) {
    digits.push(p % 10);
    p = Math.floor(p / 10);
    if (p > 0 && !primes.includes(p)) {
      return false;
    }
  }
  while (digits.length > 1) {
    p += digits.pop() * Math.pow(10, digits.length);
    if (!primes.includes(prime - p)) {
      return false;
    }
  }
  return true;
}

function truncatablePrimes(n) {

  let total = 0, count = 0;
  while (count < n) {
    findNextPrime();
    const lastPrime = primes[primes.length-1];
    if (lastPrime > 10 && isTruncablePrime(lastPrime)) {
      // console.log(lastPrime);
      total += lastPrime;
      count++;
    }
  }
  return total;
}

console.log(truncatablePrimes(11));