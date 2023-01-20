
// // ****************************************************************************
// console.log(' ** (✿◠‿◠) Ex6.2 - Counting Duplicates (◠‿◠✿) ** ');           
// // ****************************************************************************
// // //   const votes = 'aabbcdef';
// // const countOnlyVowels = (string) => {
// //     let array = string.split('');
// //     const elementCounts = array.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});}

//     // console.log(countOnlyVowels('aabbcdef'));
// // console.log(elementCounts('aabbcdef'));
// //     array.reduce((arr, obj)=>{
    
// //             if(array[obj]){
// //             array[obj]++
// //         }else {
// //             array[obj]=1 
// //         }

// //         // return array;
// //         }, {})
// //     console.log(array);
// // }    

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const arr = ['aaabbbdfghhhhervcxb'];

// function countFunc(){
//     const count = {};
// arr.forEach(element => {
//     let array = element.split('').join('');
//     for (let i=1; i<array.length; i++){
//             let newArray = array[i]; 
//         count[newArray] = (count[newArray] || 0) + 1;
//         if (count[newArray]>1){
//             console.log(count[newArray] + '#' +newArray);
//         }
//     }
//     //    console.log(count);
//     });
//     }
// countFunc()

// function longest(a, b) {

//     const listAB = [...new Set(listA.concat(listB).sort())].join("");
//     console.log(listAB);
//   }
//   longest("xxxxyyyyabklmopq", "xyaabbbccccdefww");
  

function duplicatecount(text) {
    let count = 0;
    let obj = {};
  
    for (let i of text) {
      i = i.toLowerCase();
      if (!obj[i]) {
        obj[i] = 1;
      } else {
        obj[i]++;
      }
    }
    for (let i in obj) {
      if (obj[i] > 1) {
        count++;
      }
    }
    return count;
  }
  
  console.log(duplicatecount("Indivisibilitiest"));
  console.log(duplicatecount("abcde"));
  console.log(duplicatecount("aabbcde"));
  console.log(duplicatecount("aabBcde"))