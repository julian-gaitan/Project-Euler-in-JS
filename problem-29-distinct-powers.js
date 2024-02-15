
const primes = [2, 3];

function findPrimeFactors(number) {
    number = Number(number);
    if (number < 2) return "error";
    let factors = [];
    let prime;
    let pIndex = 0;
    while (number > 1) {
        if (pIndex < primes.length) {
            prime = primes[pIndex];
        } else {
            prime += 2;
        }
        while (number % prime == 0) {
            number /= prime;
            factors.push(prime);
            if (!primes.includes(prime)) {
                primes.push(prime);
            }
        }
        pIndex++;
    }
    return factors;
}

function distinctPowers(n) {

    const numberList = [];
    for (let a = 2; a <= n; a++) {
        const numCompose = {};
        const primeFactors = findPrimeFactors(a);
        for (let i = 0; i < primeFactors.length; i++) {
            if(!numCompose[primeFactors[i]]) {
                numCompose[primeFactors[i]] = 0;
            }
            numCompose[primeFactors[i]]++;
        }
        for (let b = 2; b <= n; b++) {
            const numComposeCopy = {...numCompose};
            for (const base in numComposeCopy) {
                numComposeCopy[base] *= b;
            }
            const numString = JSON.stringify(numComposeCopy);
            if (!numberList.includes(numString)) {
                numberList.push(numString);
            } else {
                // console.log(`a:${a}, b:${b}, num:${numString}`);
            }
        }
    }
    // console.log(numberList);
    return numberList.length;
}

console.log(distinctPowers(30));
