const rateLimiterConfig = {};

const rateLimiter = (req, res, next) => {
    const interval = 60000;
    let currentTime = Date.now();
    let allowedRequests = 5;
    const ip = req.ip;

    if(!rateLimiterConfig[ip]){
        rateLimiterConfig[ip] = {
            resetTime: currentTime + interval,
            allowedRequests: allowedRequests - 1
        }
        return next();
    }
    const userData = rateLimiterConfig[ip];

    if(currentTime <= userData.resetTime && userData.allowedRequests){
        userData.allowedRequests--;
        return next();
    } 
    
    if(currentTime > userData.resetTime){
        userData.resetTime = currentTime + interval;
        userData.allowedRequests = allowedRequests--;
        return next();
    }
    
    return res.status(429).send('Rate Limit Reached!');
}
