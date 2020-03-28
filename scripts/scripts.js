// Problem 1)
let numbersArrayOne = [3, 4, 5];
let numbersArrayTwo = [10, 5, 9];

function addFunction(array) {
    let sum = 0;
    for (i = 0; i< array.length; i++) {
        sum += array[i];
    }  
    return sum;
}
console.log(addFunction(numbersArrayOne));
console.log(addFunction(numbersArrayTwo));

// Problem 2)
function averageFunctionOne (array) {
    let sum = 0;
    for (i = 0; i< array.length; i++) {
        sum += array[i];
    }  
    return (sum / array.length);
}
console.log(averageFunctionOne(numbersArrayOne));
console.log(averageFunctionOne(numbersArrayTwo));

// Bonus 1)
function averageFunction(array) {
    return (addFunction(array) / array.length);
}
console.log(averageFunction(numbersArrayOne));
console.log(averageFunction(numbersArrayTwo));

// Bonus 2)
let numbersArrayThree = [7, 10, 30, 1];
function findBiggestNumber (array) {
    return (Math.max(...array));
}
console.log(findBiggestNumber(numbersArrayThree));


// Bonus 3)
let numbersArrayFour = [3, 2, 8];
let numbersArrayFive = [4, 9, 1];

function biggestNumbersAdd (array1, array2) {
    let biggestOne = findBiggestNumber(numbersArrayFour);
    let biggestTwo = findBiggestNumber(numbersArrayFive);
    return (biggestOne + biggestTwo);
}
console.log(biggestNumbersAdd(numbersArrayFour, numbersArrayFive));