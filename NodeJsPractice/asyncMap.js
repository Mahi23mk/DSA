async function asyncMap(arr, callback) {
  let newArray = [];
  for (let val of arr) {
    const result = await callback(val);
    newArray.push(result);
  }
  return newArray;
}



function asyncMap(arr, callback) {
  return Promise.all(arr.map(callback));
}
