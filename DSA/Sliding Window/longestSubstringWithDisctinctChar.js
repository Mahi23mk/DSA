function longestSubstring(str) {
    const set  = new Set();
    const n = str.length;
    let left=0;
    let longestSub = -Infinity;
    for(let right=0; right<n; right++){
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);

        longestSub = Math.max(longestSub, right-left+1);
    }

    return longestSub;
}

// str = "abcabcbb"
longestSubstring("abcabcbb")