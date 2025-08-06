const isomorphicStrings = (s, t) => {
    const map1 = {}
    const map2 = {}

    if(s.length !== t.length) return false;
    
    for(let i=0;i<s.length; i++){
        if(!map1[s[i]] && !map2[t[i]]){
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
        if(map1[s[i]] && map1[s[i]] !== t[i] ||
            map2[t[i]] && map2[t[i]] !== s[i]
        ){
            return false;
        }
    }

    return true
}

isomorphicStrings("egg", "add")