// s = "ADOBECODEBANC", t = "ABC"
// "BANC"

const minWindowSubstring = (s, t) => {
    const str1 = s.toLowerCase();
    const str2 = t.toLowerCase();
    const arr1 = new Array(26).fill(0)
    const arr2 = new Array(26).fill(0)

    let matchCount = 0;
    let uniqueCharFreq = 0;

    for(let i=0; i<str2.length; i++){
        arr2[str2[i].charCodeAt(0)-97]++;
        uniqueCharFreq++;
    }

    let left=0;
    let right=0;
    let minLength = Infinity;
    while(right<str1.length) {
        //window expand
       const charInd = str1[right].charCodeAt(0)-97;
        if(arr2[charInd]){
            arr1[charInd]++;
        }
        if(arr2[charInd] && arr1[charInd] === arr2[charInd]) matchCount++;
        
        while(matchCount === uniqueCharFreq && left<right){
            if(right-left+1 < minLength){
                minLength = right-left+1;
                minIndex = left;
            }
            const charleftInd = str1[left].charCodeAt(0)-97;
            // dec left side
            if(arr2[charleftInd]){
                arr1[charleftInd]--;
            }
            if(arr2[charleftInd] && arr1[charleftInd] !== arr2[charleftInd]) matchCount--;
            left++;
        }

        right++;
    }
    return minLength === Infinity ? "" :str1.substring(minIndex, minIndex+minLength)
}

console.log(minWindowSubstring("ADOBECODEBANC","ABC"))



