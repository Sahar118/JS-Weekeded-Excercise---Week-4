// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex2.4 - Unique   (◠‿◠✿) ** ');           
// ****************************************************************************

// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr){
    let num = arr.sort();

    if(num[0]== num[1]){
        return num[num.length-1];
    }
    else {return num[0]; }

}
// const test = findUniq([ 1, 1, 1, 2, 1, 1 ]);
// const test = findUniq([ 0, 0, 0.55, 0, 0 ]);
const test = findUniq([ 1,2,2 ]);
console.log(test);

