// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex2.1 - Sum of lowest number (◠‿◠✿) ** ');           
// ****************************************************************************


// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


const numbers = [10, 343445353, 3453445, 3453545353453];
// const numbers = [19, 5, 42, 2, 77];

function lowestNumbers(numbers) {  
    let num1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(num1), 1)
    let num2 = Math.min(...numbers)
    return num1 + num2
}
const test = lowestNumbers(numbers);
console.log(test);