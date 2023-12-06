function largestPalindromeProduct(n) {

  let limit = Math.pow(10, n) - 1;
  let largest = 0;
  for (let x = limit; x > limit/2; x--) {
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
  let str = number + "";
  if (str.length < 2) return false;
  while (str.length >= 2) {
    if (str.charAt(0) != str.charAt(str.length - 1)) {
      return false;
    }
    str = str.substring(1, str.length - 1);
  }
  return true;
}

console.log(largestPalindromeProduct(3));