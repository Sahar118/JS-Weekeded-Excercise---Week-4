// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.5 - Abbreviate two words (◠‿◠✿) ** ');           
// ****************************************************************************
// Write a function to convert a name into initials. This kata strictly takes two words with one space 
// in between them. 
// The output should be two capital letters with a dot separating them. 
// It should look like this: 
// Sam Harris => S.H 


const fullName1 = "Sam Harris";
const fullName2 = "Patrick Feeney";

const getInitials = (name) => {
  let initials = name.split(" ");

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + "." + initials.shift().charAt(0);

    return initials.toUpperCase();
  }
};

console.log(getInitials(fullName1));
console.log(getInitials(fullName2));