
function digitFibonacci(n) {

  let limit = 10n ** BigInt(n - 1);
  let i = 2;
  let Fn = 1n;
  let Fn_1 = 1n;
  while (Fn - limit < 0) {
    let temp = Fn;
    Fn = Fn + Fn_1;
    Fn_1 = temp;
    i++;
  }
  return i;
}

console.log(digitFibonacci(1000));
