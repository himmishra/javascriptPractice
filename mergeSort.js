const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let center = Math.floor(array.length / 2)
  let left = array.slice(0, center);
  let right = array.slice(center);
 
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let results = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift());
    } else results.push(right.shift())
  }
  return [...results, ...left, ...right];
}


mergeSort(numbers);
// console.log(answer);