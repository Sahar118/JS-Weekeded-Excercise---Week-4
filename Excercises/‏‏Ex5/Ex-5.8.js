
// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.8 - shortest words version 2  (◠‿◠✿) ** ');           
// ****************************************************************************

// Given a string of words, return the longest word[s]. 
// String will never be empty and you do not need to account for different data types.   

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", '89547kf85432'];

const wordSort = words.sort(function(a, b){
    return  a.length -b.length ;
});
console.log(words[words.length-1]);