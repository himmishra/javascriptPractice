const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let smallest = array[i];
    let smallIndex = i;
    for(let j = i+1; j<array.length; j++){
      if(smallest > array[j]){
        smallest = array[j];
        smallIndex = j;
      }
    }
    if(smallIndex !== i){
      let temp = array[i];
      array[i]= smallest;
      array[smallIndex] = temp;
    }
  }
  return array;
}

selectionSort(numbers);