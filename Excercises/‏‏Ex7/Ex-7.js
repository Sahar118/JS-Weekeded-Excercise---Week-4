// // ****************************************************************************
// console.log(' ** (✿◠‿◠) Ex7 - isogram   (◠‿◠✿) ** ');           
// // ****************************************************************************

const numbers = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

const funWithNumbers = ()=> {
   const odd = numbers.filter(n=> n%2===1)
let numList = [];
const doubleOddNum = odd.map(function(num){
    return num*2
})
const oddList1 = doubleOddNum.forEach(function(n){
    let addToNum= n+=5
    numList.push(addToNum);
}) 
console.log(odd);
console.log(doubleOddNum)
console.log(numList);
}
funWithNumbers();
