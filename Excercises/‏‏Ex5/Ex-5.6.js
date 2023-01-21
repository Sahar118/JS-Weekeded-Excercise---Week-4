// ****************************************************************************
console.log(' ** (✿◠‿◠) Ex5.6 - Mask   (◠‿◠✿) ** ');           
// ****************************************************************************

// Usually when you buy something, you're asked whether your credit card number, phone number 
// or answer to your most secret question is still correct. However, since someone could look over 
// your shoulder, you don't want that shown on your screen. Instead, we mask it. 
// Your task is to write a function maskify, which changes all but the last four characters into '#'. 
// Examples 
// maskify("4556364607935616") == "############5616" 
// maskify(     "64607935616") ==      "#######5616" 
// maskify(               "1") ==                "1" 
// maskify(                "") ==                 "" 
 
// // "What was the name of your first pet?" 
// maskify("Skippy")                                   == "##ippy" 
// maskify("Nananananananananananananananana Batman!") == 
// "####################################man!" 


function maskify(changesAll) {
    let arr = changesAll.slice(-4);
    let arr2 = changesAll.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      arr2[i] = arr2[i].replace(/[a-zA-Z0-9" "]/g, "#");
    }
    let str = arr2.join("#");
    let total = str.slice(0, -4) + arr;
    return total;
  }
  console.log(maskify("Skippy"));