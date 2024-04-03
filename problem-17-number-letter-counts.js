
const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = "hundred";
const thousands = "thousand";

function numberLetterCounts(limit) {

  let total = 0;
  const regex = /[\s-]/g;
  for (let n = 1; n <= limit; n++) {
    let number = getStringNumber(n);
    let count = number.replaceAll(regex, "").length;
    total += count;
    // console.log(number+": "+count);
  }
  return total;
}

function getStringNumber(n) {

  let _1 = Math.floor(n / 1) % 10;
  let _10 = Math.floor(n / 10) % 10;
  let _100 = Math.floor(n / 100) % 10;
  let _1000 = Math.floor(n / 1000) % 10;
  let number = "";
  if (_1) {
    number = units[_1];
  }
  if (_10) {
    if ((_10 == 1 && _1 == 0) || _10 > 1) {
      number = tens[_10] + (number ? "-" + number : "");
    } else {
      number = teens[_1];
    }
  }
  if (_100) {
    number = units[_100] + " " + hundreds + (number ? " and " + number : "");
  }
  if (_1000) {
    number = units[_1000] + " " + thousands + (number ? " and " + number : "");
  }
  return number;
}

// console.log(getStringNumber(342));
console.log(numberLetterCounts(1000));