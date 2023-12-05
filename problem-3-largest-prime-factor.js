function largestPrimeFactor(number) {

  let div = 2;
  let largest;
  while (number > 1) {
    while (number % div == 0) {
      number /= div;
    }
    largest = div;
    if (div != 2) {
      div += 2;
    } else {
      div = 3;
    }
  }
  return largest;
}

console.log(largestPrimeFactor(600851475143));