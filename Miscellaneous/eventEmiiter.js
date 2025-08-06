class EventEmitter{
    constructor(){
        this.events = new Map();
    }

    // listen
    on(eventName, listener){
        if(!this.events.has(eventName)){
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(listener);
    }

    // unsubscribe
    off(eventName, listener){
        if(!this.events.has(eventName)) return;

        const listeners = this.events.get(eventName).filter((item)=> item !== listener)
        if(listeners.length){
            this.events.set(eventName, listeners); 
        }else{
            this.events.delete(eventName);
        }
    }

    // used to register a listener which runs only forst time the event is emitted
    once(eventName, listener){
        const modifiedListener = (...args)=>{
            listener(...args);
            this.off(eventName, modifiedListener);
        }
        this.on(eventName, modifiedListener)
    }

    // emit an event
    emit(eventName, ...args){
       if(!this.events.has(eventName)) return;

       this.events.get(eventName).map((listener)=> listener(...args))
    }
}

function greet(name){
    console.log(`Hello ${name}`);
}

function greet2(name){
    console.log(`Hii ${name}`);
}

const emitter = new EventEmitter()
emitter.on('hi', greet);
emitter.on('hi', greet2);
emitter.emit('hi', 'Mahima')
emitter.off('hi', greet)

