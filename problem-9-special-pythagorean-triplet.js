
function specialPythagoreanTriplet(n) {
 for (let c = n-2; c >= 2; c--) {
   for (let b = Math.ceil((n-c)/2); b < c; b++) {
     let a = n - c - b;
     if (a <= 0) {
       break;
     }
     if ((a*a + b*b) == c*c) {
      //  console.log(`a: ${a}, b: ${b}, c:${c}`);
       return a*b*c;
     }
   }
 }
 return false;
}

console.log(specialPythagoreanTriplet(1000));