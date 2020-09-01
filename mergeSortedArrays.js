function merge(arr1, arr2) {
    const result = [];
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let i = 0; i <= arr1.length - 1; i++) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i])
            } else {
                result.push(arr2[j]);
                arr2.shift();
            }
        }
    }
    return result;
}


function mergeSortedArrays(arr1, arr2) {
    const result = [];
    while(arr1.length && arr2.length){
      if(arr1[0] < arr2[0]){
        result.push(arr1.shift());
      } else{
        result.push(arr2.shift())
      }
    }
    console.log(...arr1);
    return [...result, ...arr1, ...arr2];
}

mergeSortedArrays([], [3,4,6,30]);