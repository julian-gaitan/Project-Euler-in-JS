
const coinList = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(n) {

  let total = 0;
  const combination = {};
  coinList.forEach((value) => combination[value] = 0);
  let upperLimit = coinList.length - 1;
  while (combination[coinList[0]] < n) {
    for (let i = upperLimit; i >= 0; i--) {
      while (evaluateComb(combination) + coinList[i] <= n) {
        combination[coinList[i]]++;
      }
      if (evaluateComb(combination) == n) {
        break;
      }
    }
    // console.log(Object.entries(combination).filter(keyValue => keyValue[1]).reduce((prev, keyValue) => ({...prev, [keyValue[0]]: keyValue[1]}), {}));
    total++;
    for (let i = 1; i < coinList.length; i++) {
      if (combination[coinList[i]]) {
        combination[coinList[i]]--;
        combination[coinList[i - 1]]++;
        upperLimit = i - 1;
        for (let j = i - 2; j >= 0; j--) {
          combination[coinList[j]] = 0;
        }
        break;
      }
    }
  }
  return total;
}

function evaluateComb(combination) {
  let total = 0;
  for (const coin in combination) {
    total += Number(coin) * combination[coin];
  }
  return total;
}

console.log(coinSums(200));