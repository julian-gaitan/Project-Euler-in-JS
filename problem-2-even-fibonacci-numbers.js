function fiboEvenSum(n) {

  let array = [1, 1];
  let total = 0;
  let last;
  while ((last = array[array.length-1] + array[array.length-2]) <= n) {
    array.push(last);
    if (last % 2 == 0) {
      total += last;
    }
  }
  return total;
}

console.log(fiboEvenSum(4e6));