function multiplesOf3and5(number) {

  let total = 0;
  for (let x = 3; x < number; x ++) {
    if (x % 3 == 0 || x % 5 == 0) {
      total += x;
    }
  }
  return total;
}

console.log(multiplesOf3and5(1000));