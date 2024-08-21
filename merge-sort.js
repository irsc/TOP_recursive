function mergeSort(array){
    let sortedArray = [];
    if(array.length == 1) return array;
    
    //Split array in two
    let half = array.length%2 == 0 ? array.length/2 : (array.length+1)/2 ;
    let arrayLeft = array.splice(0,half);
    let arrayRight = array;
    //Call the mergeSort again on each subarray
    let arrayLeftMerge = mergeSort(arrayLeft);
    let arrayRightMerge = mergeSort(arrayRight);

    //Loop over the subarrays to reorder them
    while (arrayLeftMerge.length>0 && arrayRightMerge.length>0) {
        if(arrayLeftMerge[0] <= arrayRightMerge[0]){
            sortedArray.push(arrayLeftMerge.shift());
        }else if(arrayLeftMerge[0] > arrayRightMerge[0]){
            sortedArray.push(arrayRightMerge.shift());
        }
    }
    //Lastly, add any bit that is already ordered than did not enter before
    if(arrayLeftMerge.length==0){
        sortedArray = sortedArray.concat(arrayRightMerge);
    }else if(arrayRightMerge.length==0){
        sortedArray = sortedArray.concat(arrayLeftMerge);
    } 

    return sortedArray;
}

console.log("Merge Sort examples:");
let arrA = [3, 2, 1, 13, 8, 5, 0, 1] ;
console.log("Array A: ["+arrA +"]");
console.log(mergeSort(arrA)); // [0, 1, 1, 2, 3, 5, 8, 13]

let arrB = [105, 79, 100, 110];
console.log("Array B: ["+arrB +"]");
console.log(mergeSort(arrB)); // [79, 100, 105, 110]