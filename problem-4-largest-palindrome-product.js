function largestPalindromeProduct(n) {

  let limit = Math.pow(10, n) - 1;
  let largest = 0;
  for (let x = limit; x > (3*limit/4); x--) {
    for (let y = limit; y >= x; y--) {
      let z = x * y;
      if (isPalindromicNumber(z) && z > largest) {
        largest = z;
      }
    }
  }
  return largest;
}

function isPalindromicNumber(number) {
  return number == reverseNumber(number);
}

function reverseNumber(number) {
  let revNumber = number % 10;
  while (number >= 10) {
	number = Math.floor(number / 10);
    revNumber = (revNumber) * 10 + (number % 10);
  }
  return revNumber;
}

console.log(largestPalindromeProduct(3));