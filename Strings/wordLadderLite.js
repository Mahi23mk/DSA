// Given two strings start and end of the same length, and a dictionary of allowed words, determine if you can transform start into end by changing only one character at a time, with each intermediate word being in the dictionary.
// Each transformation must:
// Change only one character
// Result in a word from the dictionary 

//  Input:
// start = "hit"
// end = "cog"
// dictionary = ["hot", "dot", "dog", "lot", "log", "cog"] 

//  Output:
// true 

const diffByOne = (str1, str2) => {
    let mismatchCount = 0;
    if(str1.length !== str2.length) return false;

    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i]) mismatchCount++;
    }

    return mismatchCount === 1
}

const buildgraph = (dictionary) => {
    const map = {};
    dictionary.map((item)=> map[item] = []);
    for(let i=0; i<dictionary.length; i++){
        for(let j=i+1; j<dictionary.length; j++){
            if(diffByOne(dictionary[i], dictionary[j])){
                map[dictionary[i]].push(dictionary[j])   
                map[dictionary[j]].push(dictionary[i])   
            }
        }
    }
    return map;
}

const bfs = (adjList, start, end) => {
    const queue = [start];
    const visited = {}
    while(queue.length){
        const parNode = queue.shift();
        if(parNode === end) return true;
           
        for(let node of adjList[parNode]){
            if(!visited[node]){
                queue.push(node);
                visited[node] = 1;
            }
        }
    }

    return false;
}

const wordLadder = (dictionary, start, end) => {
    if(!dictionary.includes(end)) return false;
    if(!dictionary.includes(start)) dictionary.push(start);

    const adjList = buildgraph(dictionary);
    return bfs(adjList, start, end)
}

console.log(wordLadder(["hot", "dot", "dog", "lot", "log", "cog"], "hit", "cog"))

