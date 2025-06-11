
const isObject= (val) => typeof val === 'object' && val !== null;

const deepEqual = (a, b) => {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for(let [key, value] of Object.entries(a)){
        if (!b.hasOwnProperty(key)) return false;

        const bVal = b[key];
        const aVal = a[key]; 
        
        if(isObject(aVal) && isObject(bVal)) {
             if(!deepEqual(aVal, bVal)) return false;
        }
        else if(aVal !== bVal){
            return false;
        }
    }
    return true; 
}

const a = { x: 1, y: { z: 3, d:2 } };
const b = { x: 1, y: { z: 3 } };
 console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); 

const c = { x: 1, y: { z: 3 } };
const d = { x: 1, y: { z: 3 } };
console.log(deepEqual(c, d)); // false
console.log(deepEqual({ x: 1, y: { z: 3 } }, { x: 1, y: { z: 3 } })) // true
console.log(deepEqual({ x: 1 }, { x: 1, y: 2 })) // false
console.log(deepEqual({ a: 1 }, { a: 2 })) // false
