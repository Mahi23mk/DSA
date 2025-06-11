function calculateProd (arr){
    let currProd = 1;
    let result = new Array(arr.length).fill(1);
    for(let i=0; i< arr.length; i++){
        result[i] = currProd;
        currProd = currProd*arr[i];
    }

    currProd = 1;
    for(let i=arr.length-1; i>=0; i--){
        result[i] = result[i]*currProd;
        currProd = currProd*arr[i];
    }
    return result;
}

console.log(calculateProd([1, 2, 3, 4]))