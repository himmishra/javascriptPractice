function reverse(str){
    if(str || typeof str === 'string'){
      return str.split('').reverse().join('');
    }
    return 'not a string';
  }
  
  reverse('ab')