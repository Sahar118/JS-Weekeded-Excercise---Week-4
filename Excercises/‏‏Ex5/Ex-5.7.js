// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.7 - shortest words   (◠‿◠✿) ** ');           
// ****************************************************************************


// Simple, given a string of words, return the ​length​ of the shortest word(s). 
// String will never be empty and you do not need to account for different data types

// const words = ["apple",
// "supercalifragilisticexpialidocious",
// "hi", "zoo"];

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", '1231546', 'true', '89547kf85432'];

const wordSort = words.sort(function(a, b){
    return  a.length -b.length ;
});
console.log(words);
console.log(words[0].length);