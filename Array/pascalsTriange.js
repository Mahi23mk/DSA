/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    for(let i=1; i<numRows; i++){
        const newArr = new Array(i+1);
        const len = newArr.length;
        newArr[0] = 1;
        newArr[len-1] = 1; 
        for(let j=1; j<len-1; j++){
            newArr[j] = result[i-1][j-1] + result[i-1][j]
        }
        result.push(newArr);
    }
    return result;
};