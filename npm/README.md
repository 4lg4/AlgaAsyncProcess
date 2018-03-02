# AlgaAsyncProcess
Node.js: async process, a way to avoid huge try {} catch blocks in JS using GO approach


### Get Started
```bash
    npm i --save alga-async-process
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

## Author
Alga Leal (4lg4) 

- [http://alga.me](http://alga.me)
- [https://www.linkedin.com/in/akgleal](https://www.linkedin.com/in/akgleal)
- [https://github.com/4lg4](https://github.com/4lg4)

