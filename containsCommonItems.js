///Given 2 arrays as input check if any item af one exists in the other
//ex: arr1 = ['a', 'b', 'c', 'd']
//ex: arr2 = ['x', 'y', 'z'] should return False
//ex: arr1 = ['a', 'b', 'c', 'd']
//ex: arr2 = ['x', 'y', 'a'] should return True

array1 = ['a', 'b', 'c', 'd']
array2 = ['x', 'y', 'a']

// basic approach O(n*m)
function containsCommonItems(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
                console.log('found');
            }
        }
    }
    return false;
    console.log('not found');
}

containsCommonItems(array1, array2);

function containsCommonItems2(arr1, arr2){
    let map = {};
    for(let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            map[arr1[i]] = true;
        }
    }

    for(let j=0; j<arr2.length;j++){
        if(map[arr2[j]]){
            return true;
        }
    }

    return false;
}

containsCommonItems2(array1, array2);

function containsCommonItems3(arr1, arr2){
    return arr1.some(items => arr2.includes(item))
}