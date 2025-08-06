//give an array of strings, return string which is a substring of any string

// created includes version
const checkSubstring = (str1, str2)=>{
    let i=0;
    while(i<str2.length - str1.length+1){
        let j=0;
        while(str1[j] !== str1[i]) i++;
        while(j<str1.length && i<str2.length && str1[j] === str1[i]){
            j++;
            i++;
        }

        if(j === str1.length-1) true;
    }
    return false;
}

substringOfAnother = (arr)=>{
    const map = {}
    const result = [];
    for(let word of arr){
        const len = word.length;
        if(!map[len]) map[len] = []
        map[len].push(word);
    }

    for(let word of arr){
        const len = word.length;
        let i=0;
        while(map[len+i])
            map[len+i].map((item)=>{
                if(checkSubstring(word, item)) result.push(word);
            })
            i++;
        }

    return result
}