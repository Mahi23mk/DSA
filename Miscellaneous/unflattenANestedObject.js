const result = {}
for(let [key, val] of Object.entries(flat)){

  const arr = key.split('.');
  // console.log(a)
  let resultCopy = result;
  for (let i = 0; i < arr.length; i++) {
    if(i==arr.length-1){
      resultCopy[arr[i]] = val;
    }else{
      if(!resultCopy[arr[i]]){
        resultCopy[arr[i]] = {};
      }
      resultCopy = resultCopy[arr[i]]
    }
  }
}  

// Optimized
function unflatten(obj) {
    const result = {};

    for (const key in obj) {
        const keys = key.split(".");
        let current = result;

        for (let i = 0; i < keys.length; i++) {
            const part = keys[i];

            if (i === keys.length - 1) {
                current[part] = obj[key];
            } else {
                if (!current[part]) {
                    current[part] = {};
                }

                current = current[part];
            }
        }
    }

    return result;
}
const flat = {
  "user.name": "Mahima",
  "user.address.city": "Chandigarh",
  "user.address.zip": 12345,
  "active": true
};

console.log(unflatten(flat));
