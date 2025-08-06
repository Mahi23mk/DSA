//arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
// [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]

const n = arr.length;
const result = [];
    if(arr[0]-lower >= 1){
        result.push([lower,arr[0]-1]);
    }

for(let i=0; i<n-1; i++){
    if(arr[i+1]-arr[i]>1){
        result.push([arr[i]+1, arr[i+1]-1])
    }
}

if(upper - arr[n-1] >= 1){
    result.push([arr[n-1]+1,upper]);
}

console.log(result);