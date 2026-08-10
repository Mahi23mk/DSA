const val = {
  user: {
    name: "Mahima",
    address: {
      city: "Chandigarh",
      final: {
        shape: "triangle",
        circle: "round"
      }
    },
    college: {
      name: "Gndu"
    }
  }
}

const stack = [{key: '', val}]
const final = {};
while(stack.length){
  const {key: str, val: obj} = stack.pop();

  for(let [key,val] of Object.entries(obj)){  
     if(typeof val === 'string'){
      final[str ? `${str}.${key}`: key] = val;
     }else{
      stack.push({ key: str?`${str}.${key}` : key, val })
     }
  }
}

console.log(final)


//{user.name: 'Mahima', user.college.name: 'Gndu', user.address.city: 'Chandigarh', user.address.final.shape: 'triangle', user.address.final.circle: 'round'}
