const obj1 = {
  name: "Mahima",
  address: {
    city: "Chandigarh"
  }
};

const obj2 = {
  name: "Mahima",
  address: {
    city: "Chandigarh"
  }
};

const deepEqual = (obj1, obj2) => {
  
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
  for(let [key, val] of Object.entries(obj1)){
   if(!obj2[key]) return false;
    if(typeof val !== typeof obj2[key]) return false;
    if(typeof val !== 'object' && typeof obj2[key] !== 'object' && (val !== obj2[key])) return false;
    if(typeof val === 'object'){
       if(!deepEqual(val, obj2[key])){
         return false;
       }
    }
  }

  return true;
}
const res = deepEqual(obj1, obj2)

console.log(res)
