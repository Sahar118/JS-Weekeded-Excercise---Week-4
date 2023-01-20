// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.3 - To Camel Case (◠‿◠✿) ** ');           
// ****************************************************************************


// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
 
// Examples 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
 
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(sentence){
    if (sentence=='-' || sentence== '_'){

    }
    let newSentence = sentence.replace("-", ' ').toUpperCase(sentence[0]);
    console.log(newSentence);
    // console.log(sentence[0])
}
console.log(toCamelCase("the-stealth-warrior"));

    function toCamelCase(word) {
        const words = word.split(/[-_]+/);
        for (let i = 0; i < words.length; i++) {
          if (i === 0) {
            words[i] = words[i][0] + words[i].slice(1).toLowerCase();
          } else {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
          }
        }
        return words.join(" ");
      }
      console.log(toCamelCase("The_Stealth_Warrior"));

    //   console.log(toCamelCase("the-stealth-warrior"));
    
    //=> returns "WeIrD StRiNg CaSe"
    