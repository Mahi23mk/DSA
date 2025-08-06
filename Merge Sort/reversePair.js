
const func = (arr, left, right)=> {
    let count =0;
    const mergeSort = (arr, left, right) => {
        if(left >= right) return;
        const mid = Math.floor((left+right)/2);

        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        let i=left;
        let j=mid+1;
        const temp = []
        
        while(i<=mid){
            while(j<=right && arr[i] > 2*arr[j]) j++;
            count += j-(mid+1);
            i++;
        }

        i=left;
        j=mid+1;
        
        while(i<=mid && j<=right){
            if(arr[i] <= arr[j]){
                temp.push(arr[i]);
                i++;
            }else{
                temp.push(arr[j])
                j++;
            }
        }

        while(i<=mid) { 
            temp.push(arr[i]); 
            i++;
        }
        while(j<=right) { 
            temp.push(arr[j]); 
            j++;
        }
        
        for (let k = 0; k < temp.length; k++) {
            arr[left + k] = temp[k];
        }
        return count
    }

    return mergeSort(arr, left, right)
}

const arr = [1,6,4,2,8,7,3]
console.log(func(arr,0, arr.length-1))
