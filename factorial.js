// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number, answer =1) {
    //code here
    if(number === 0){
      return answer;
    }
    answer = number * answer;
    return findFactorialRecursive(number - 1, answer)
  }
  
  
  function findFactorialRecursive2(number) {
    //code here
    if(number === 0){
      return answer;
    }
    return number * findFactorialRecursive(number - 1)
  }
  
  function findFactorialIterative(number) {
    //code here
    let answer = 1;
    for(let i = number; i > 0; i--){
      answer = answer*i;
    }
    return answer;
  }
  
  findFactorialRecursive2(5)