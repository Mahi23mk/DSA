// s = "cbaebabacd", p = "abc"

const anagrams = (str1, str2) => {
    const arr1 = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);
    let matchCount = 0;

    for(let i=0; i < str2.length; i++){
        arr2[(str2[i]).charCodeAt(0)-97]++; 
    }

    for(let i=0; i < str2.length; i++){
        const charInd = str1[i].charCodeAt(0)-97
        if(arr2[charInd])arr1[charInd]++; 
    }

    for(let i=0; i < 26; i++){
        if(arr2[i] && arr1[i] === arr2[i]) matchCount++;
    }

    const result = [];
    const len = str2.length;
    let left=0; 
    let right = str2.length;
    
    while(right < str1.length){
        if(matchCount===len) {
            result.push(right - len);
        }
        const rightChar = str1[right].charCodeAt(0)-97;
        if (arr2[rightChar]) arr1[rightChar]++
        if(arr2[rightChar] && arr1[rightChar] === arr2[rightChar]) matchCount++
        else if(arr2[rightChar] && arr1[rightChar] === arr2[rightChar] + 1) matchCount--

        const leftChar = str1[left].charCodeAt(0)-97;
        if (arr2[leftChar]) arr1[leftChar]--
        if(arr2[leftChar] && arr1[leftChar] === arr2[leftChar]) matchCount++
        else if(arr2[leftChar] && arr1[leftChar] === arr2[leftChar] - 1) matchCount--

        left++;
        right++;
    }
    return result;
}

console.log(anagrams("cbaebabacd", "abc"))
