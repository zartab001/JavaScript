//Task 1: Even/Odd Checker

function isEven(number) {
  // Return true if even, false if odd
  return number % 2 === 0;
}

// Test cases:
// console.log(isEven(4));  Expected: true
// console.log(isEven(7));  Expected: false
// console.log(isEven(0));  Expected: true


//Task 2: Array Loop

const fruits = ["Apple" , "Banana" , "Orange" , "Grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} : ${fruits[i]}`);
}

// Test cases:
// 0 : Apple
// 1 : Banana
// 2 : Orange
// 3 : Grape


//Task 3: Array Sum Function

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Test cases:
// console.log(sumArray([1, 2, 3, 4])); O/p 10
// console.log(sumArray([10, 20, 30])); 0/p 60
// console.log(sumArray([])); O/p 0