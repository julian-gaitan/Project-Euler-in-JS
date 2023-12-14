
function longestCollatzSequence(limit) {

  let longest = 0, starting;
  for (let i = 3; i <= limit; i++) {
    let n = i, sequence = [n];
    while ((n = nextSequenceNumber(n)) != 1) {
      sequence.push(n);
    }
    sequence.push(1);
    // console.log(sequence);
    if (sequence.length > longest) {
      longest = sequence.length;
      starting = i;
      // console.log(longest);
    }
  }
  return starting;
}

function nextSequenceNumber(n) {
  if (n % 2 == 0) {
    n /= 2;
  } else {
    n *= 3;
    n++;
  }
  return n;
}

console.log(longestCollatzSequence(1e6));