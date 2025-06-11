// Problem: Maximum Product Subarray (Medium-Hard)


// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product.


function maxProdSubarray(){
    let currProd;
    let maxi = -Infinity;
    let mini = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            currProd = 1;
            continue;
        }
        currProd *= arr[i];
        maxi = Math.max(maxi, currProd);
        mini = Math.min(mini, currProd);
    }
    return maxi;
}

maxProdSubarray([2, 3, -2, 4])
