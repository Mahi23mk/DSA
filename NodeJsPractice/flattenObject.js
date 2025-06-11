
let obj = {
    a:10,
    b: { 
        c: {
            d: 10
        }
    },
    d: 20,
    e: 30,
    f: {
        g: {
            h:{
                k:50
            }
        }
    }
}


const flattenObject = (object, newKey, newObject) =>{
       
    for(let [key, value] of Object.entries(object)){
        newKey = newKey ? `${newKey}.${key}`: key
    
        if(value === 'object' && value !== null){
            const {nestedKey, nestedVal} = flattenObject(value, newKey, newObject);
            newObject[nestedKey] = nestedVal;
        }else{
            newObject[newKey] = value;
        }
    }
}


flattenObject(obj, '', {})