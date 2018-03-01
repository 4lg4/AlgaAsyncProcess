# AlgaAsyncProcess
Node.js: async process, a way to avoid huge try {} catch blocks in JS using GO approach


### Get Started
```bash
    npm i --save 
```

### Example
```javascript
    import aap, {resolve, reject} from 'AlgaAsyncProcess';

    (async()=>{
        const [err,result] = await aap(__MyPromise__);
    
        if(err) { 
            return reject(err); 
        }
    
        if(!result) { 
            return reject('no results'); 
        }
    
        return result;
    })();
```
