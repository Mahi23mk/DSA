const getPattern = (str) => {
    const arr = new Array(26).fill('')
    let counter = 0;
    let res = ''
    for (let i = 0; i < str.length; i++) {
        const ind = str[i].charCodeAt(0) - 97;
        if (!arr[ind]) {
            arr[ind] = String.fromCharCode(97 + counter)
            counter++;
        }
        res += arr[ind]
    }
    
    return res;
}


const isomorphicGroups = (arr) => {
    const map = {}
    for (let word of arr) {
        const pattern = getPattern(word);
        if(!map[pattern]){
            map[pattern] = []
        }
        map[pattern].push(word)
    }
    return Object.values(map)
}

console.log(isomorphicGroups(["foo", "bar", "paper", "title", "egg", "add", "baz", "noo"]
))