const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
 
  for(let i = 0; i < numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
      if(numbers[i] > numbers[j]){
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}

bubbleSort(numbers);
console.log(numbers);