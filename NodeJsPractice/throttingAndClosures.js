const throttle = (fun, delay)=>{
    let activationTime = Date.now();
    console.log(delay)
    return function internal(){
        if(Date.now() >= activationTime){
            fun();
            activationTime = Date.now() + delay
        }
    }
}

const throttledLog = throttle(() => console.log('Throttled call!'), 2000);

throttledLog(); // Called immediately
throttledLog(); // Ignored
setTimeout(throttledLog, 1000); // Ignored
setTimeout(throttledLog, 2500); // Called




function throttle(fn, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now >= lastCallTime + delay) {
      lastCallTime = now;
      fn(...args);
    }
  };
}
