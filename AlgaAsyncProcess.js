module exports async (promise) => {
    try {
        return [null, await promise];
    } catch (err){
        return [err];
    }
};
