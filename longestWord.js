function LongestWord(sen) {
    // code goes here 
    let temp = sen.split(' ');
    let temp1 = sen.split(' ');
    for (let i = 0; i < temp.length; i++) {
      let newTemp = temp[i]
      temp[i] = newTemp.replace(/[^\w]/g, '').length;
    }
    let maxIndex = temp.indexOf(Math.max(...temp));
  
  
    return temp1[maxIndex];
  
  }
  