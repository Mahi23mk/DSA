let count = 0;
const mightFail = async () => {
  count++;
  if (count < 3) throw new Error("Failed");
  return "Success";
};

function retryAsync (fun, retryCount, delay){
  return new Promise(async(resolve, reject)=>{
  try {
    const result = await fun();
    return resolve(result);
  } catch (error) {
        if(retryCount==0) return reject();
        setTimeout(async()=>{
            retryAsync(fun, retryCount--, delay)
            .then((resp)=> resolve(resp)) 
            .catch((rej)=> reject())
        }, delay)
    }   
  })
}

retryAsync(mightFail, 5, 1000).then(console.log).catch(console.error);

// Logs "Success" after 2 failed attempts and 2 seconds total
