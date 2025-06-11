class Redis{

    constructor(){
        this.redisStore = {};
        this.timeoutStore = {};
    }

    async get(key) {
        return this.redisStore.hasOwnProperty(key) ? this.redisStore[key] : null;
    }

    async set(key, value, ttl) {
        this.redisStore[key] = value;

        if(this.timeoutStore[key]){
            clearTimeout(this.timeoutStore[key]);
        }
        
        if(ttl > 0){
        this.timeoutStore[key] = setTimeout(()=>{
                delete this.redisStore[key];
                delete this.timeoutStore[key];
            },ttl)
        }
    }
}


//Singleton Function to use caching throught the app
const Redis = (function() {
    const redisStore = {};
    const timeoutStore = {};
    return function(action, key, value, ttl){
        if(action === 'get'){
            return redisStore.hasOwnProperty(key) ? redisStore[key] : null;
        }

        if(action === 'set'){
            redisStore[key] = value;

            if(timeoutStore[key]){
                clearTimeout(timeoutStore[key]);
            }
            
            if(ttl > 0){
                timeoutStore[key] = setTimeout(()=>{
                    delete redisStore[key];
                    delete timeoutStore[key];
                },ttl)
            }
        
        } 
    }
})();


const redis = new Redis;
redis('get', 'key');
redis('set', 'key', 15, 5000);
redis('get', 'key');


//Singleton function
const Redis = function() {

    if(Redis.instance){
        return Redis.instance;
    }
    this.redisStore = {};
    this.timeoutStore = {};
   
    Redis.instance = this;
}

Redis.prototype.get = function(key) {
    return this.redisStore.hasOwnProperty(key) ? this.redisStore[key] : null;
};
        
Redis.prototype.set = function(key, value, ttl = 0) {
    this.redisStore[key] = value;

    if(this.timeoutStore[key]){
        clearTimeout(this.timeoutStore[key]);
    }
    
    if(ttl > 0){
        this.timeoutStore[key] = setTimeout(()=>{
            delete this.redisStore[key];
            delete this.timeoutStore[key];
        },ttl)
    }
}


const redisCache = new Redis();
redisCache.get('abc');
redisCache.set('abc', 1, 2000);
redisCache.get('abc');


