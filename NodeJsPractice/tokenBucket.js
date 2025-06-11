const tokenBucket = (fn, rate, capacity, intervalInSeconds) => {
    let tokens = capacity;
    let lastRefill = Date.now();
    const interval = intervalInSeconds * 1000;

    return function (...args) {
        const now = Date.now();
        const elapsed = now - lastRefill;

        // Refill logic
        const tokensToAdd = Math.floor((elapsed / interval) * rate);
        if (tokensToAdd > 0) {
            tokens = Math.min(capacity, tokens + tokensToAdd);
            lastRefill = now;
        }

        if (tokens > 0) {
            tokens--;
            fn(...args);
        } else {
            console.log("Rate limit exceeded");
        }
    };
};
