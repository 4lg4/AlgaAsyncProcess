# AlgaAsyncProcess
Node.js: async process, a way to avoid huge try {} catch blocks in JS using GO approach

### Getting Started
```javascript
    import aap from './AlgaAsyncProcess'
    
    const [err,result] = await aap(__MyPromise__);

    if(err) { 
    return err; 
    }

    if(!result) { 
    return 'Nothing found' 
    }

    return result;
```
