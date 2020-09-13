// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative2(n){
    //code here;
    let arr = [0, 1];
    for(let i =2; i<=n; i++){
      arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[n];
  }
  fibonacciIterative2(8);
  
  
  function fibonacciIterative(n){
    //code here;
    if(n<=1){
      return 0;
    } else if(n === 2){
      return 1;
    }
    let result = 1;
    let prev = 0;
    let temp = 0;
    for(let i = 2; i <= n; i++){
      temp = result;
      result = result + prev;
      prev = temp;
    }
  
    return result;
  }
  // fibonacciIterative(4);
  
  function fibonacciRecursive(n) {
    //code here;
    if(n < 2){
      return n;
    }
    return fibonacciRecursive(n-2)+fibonacciRecursive(n-1);
  }
  
  // fibonacciRecursive(6)
  function memoizedFib(){
    let map = {};
    return function fib(n){
      if(n in map){
        return map[n];
      }

      if(n < 2){
        return n;
      }

      map[n] = fib(n-1) + fib(n-2);
      return map[n]
    }
  }

  const fasterFib = memoizedFib();
  console.log(fasterFib(100))