function fakeAsyncTask(ele) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(ele)
            res(ele)
        },3000)
    })
}
function taskQueue(queue){
    let i = 0;
    return async function worker(){
        while(i < queue.length){
            await fakeAsyncTask(queue[i++]);
        }
    }
}

const queue = [1,2,3,4,5]
const worker = taskQueue(queue)

const concurrency = 3

const workers = Array.from({length: concurrency}, () => worker())

Promise.all(workers).then(()=>{
    console.log('all finished')
});