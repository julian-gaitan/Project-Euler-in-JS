
const primesArr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];

function quadraticPrimes(range) {

    if (range % 2 == 0) {
        range--;
    }
    let maxConsecutiveNumberPrimes = 0;
    let aFactor, bFactor;
    for(let a = -range; a <= range; a+=2) {
        for(let b = -range; b <= range; b+=2) {
            let consecutiveNumberPrimes = findMaxConsecutivePrimes(a, b);
            if (consecutiveNumberPrimes > maxConsecutiveNumberPrimes) {
                maxConsecutiveNumberPrimes = consecutiveNumberPrimes;
                aFactor = a;
                bFactor = b;
            }
        }
    }
    // console.log(`consecutive : ${maxConsecutiveNumberPrimes}`);
    // console.log(`a: ${aFactor}`);
    // console.log(`b: ${bFactor}`);
    return aFactor * bFactor;
}

function findMaxConsecutivePrimes(a, b) {
    let n = 0;
    let result = n*n + a*n + b;
    while (findUntilNPrime(result).includes(result)) {
        n++;
        result = n*n + a*n + b;
    }
    return n;
}

function findUntilNPrime(n) {

    while (primesArr[primesArr.length-1] < n) {
        let number = primesArr[primesArr.length - 1] + 2;
        while (number != 0) {
            let i, limit = Math.floor(Math.sqrt(number));
            for (i = 1; primesArr[i] <= limit; i++) {
                if (number % primesArr[i] == 0) {
                break;
                }
            }
            if (primesArr[i] > limit) {
                // console.log(`    ${number} added`);
                primesArr.push(number);
                number = 0;
            } else {
                number += 2;
            }
        }
    }
    return primesArr;
}

console.log(quadraticPrimes(1000));
