function duplicatecount(text) {
    let count = 0;
    let obj = {};
    let isTrue = true;
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
    if (count >= 1) isTrue = false;
    return isTrue;
  }
  console.log(duplicatecount("Dermatoglyphics"));
  console.log(duplicatecount("aba"));
  console.log(duplicatecount("moOse"));                                             