/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prevArray = [1];
    let newArray = prevArray;
    for(let i=1; i<=rowIndex+1; i++){
        newArray = new Array(i);
        newArray[0] = 1;
        newArray[i-1] = 1;
    
        for(let j=1; j<i-1; j++){
            newArray[j] = prevArray[j] + prevArray[j-1];
        }
        prevArray = newArray;
    }
    return newArray;
};