function checkValidString(mapS, mapT){
    for (let key in mapT){
        if (!mapS[key] || mapS[key] < mapT[key]) return false;
    }
    return true;
}

function minimumWindowSubstring(s, t){
    const mapT = {};
    for(let i=0; i<t.length; i++){
        if(!mapT[t[i]]){
            mapT[t[i]]++;
        }else{
            mapT[t[i]] = 1;
        }
    }

    const mapS = {};
    let left=0;
    let minLen = s.length;
    for(let right=0; right<s.length; right++){
        if(mapS.hasOwnProperty(s[right])){
            mapS[s[right]]++;
        }
        else if(mapT[s[right]]){
            mapS[s[right]] = 1;
        }

        while(checkValidString(mapS, mapT)){
            minLen = Math.min(minLen, right-left+1);
            left++;
        }            
    }

    return minLen;
}