function isPalindrome(txt) {
  // let trailingZeros = 0;
  // while (txt.charAt(txt.length-1-trailingZeros) === '0') {
  //   trailingZeros++;
  // }
  // txt = txt.substring(0, txt.length-trailingZeros);
  const arr = txt.split('');
  const mid = Math.floor(arr.length / 2);
  for (let i = 0; i <= mid; i++) {
    if (arr[i] !== arr[arr.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

function doubleBasePalindromes(n) {

  let total = 0;
  for (let i = 1; i <= n; i++) {
    const number = String(i);
    if (isPalindrome(number)) {
      const binary = i.toString(2);
      if (isPalindrome(binary)) {
        // console.log(number);
        // console.log(binary);
        total += i;
      }
    }
  }
  return total;
}

console.log(doubleBasePalindromes(1000000));