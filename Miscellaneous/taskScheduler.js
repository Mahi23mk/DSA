class TaskScheduler{
    constructor(concurrency){
        this.concurrency = concurrency;
        this.queue = [];
        this.counter = 0;
    }

    addTask(task){
        this.queue.push(task);
    }

    start(){
        while (this.counter < this.concurrency && this.queue.length > 0) {
            const alreadyInQueue = this.queue.shift();
            alreadyInQueue.then(()=>{
                this.counter--;
                this.start();
            })
            
            this.counter++;
        }
    }  
}

const createTask = (val, time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(val)
            resolve();
        }, time)
    })
}



const scheduler = new TaskScheduler(2);

scheduler.addTask(createTask("A", 1000));
scheduler.addTask(createTask("B", 3000));
scheduler.addTask(createTask("C", 5000));
scheduler.addTask(createTask("E", 1000));
scheduler.addTask(createTask("D", 2000));
scheduler.start();