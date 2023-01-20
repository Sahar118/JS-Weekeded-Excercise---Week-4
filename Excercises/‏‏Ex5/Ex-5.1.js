// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.1 - trimming string   (◠‿◠✿) ** ');           
// ****************************************************************************

// It's pretty straightforward. Your goal is to create a function that removes the first and last 
// characters of a string. You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.


let Str = "Hello"

const removesFunc = ()=>{
    let newStr = Str.replace(Str[2],'').replace(Str[Str.length-1],'');
    console.log(newStr);
}
removesFunc(Str);