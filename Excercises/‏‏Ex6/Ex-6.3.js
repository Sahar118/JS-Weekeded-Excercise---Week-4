
// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex6.3 - organize string   (◠‿◠✿) ** ');           
// ****************************************************************************

function longest(a, b) {
    const listA = a.split("");
    const listB = b.split("");
    const listAB = [...new Set(listA.concat(listB).sort())].join("");
    console.log(listAB);
  }
  longest("xxxxyyyyabklmopq", "xyaabbbccccdefww");
  