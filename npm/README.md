# AlgaAsyncProcess
Node.js: async process, a way to avoid huge try {} catch blocks in JS using GO approach


### Get Started
```bash
    npm i --save npm i alga-async-process
```

### Example
```javascript
    import aap, {resolve, reject} from 'AlgaAsyncProcess';

    (async()=>{
        const [err, result] = await aap(__MyPromise__);
    
        if(err) { 
            return reject(err); 
        }
    
        if(!result) { 
            return reject('no results'); 
        }
    
        return result;
    })();
```

### IMPORTANT
##### NO fullReturn option
```javascript
  const [err, one, two, three] = await aap(
    Promise.resolve([1,2,3])
  );
  
  const [err, a, b] = await aap(
    Promise.all([
      __MyPromise__,
      __MyPromise__
    ])
  );
```
##### fullReturn option
```javascript
  const [err, entireArray] = await aap(
    Promise.resolve([1,2,3]),
    true
  );
```

## Author
Alga Leal (4lg4) 

- [http://alga.me](http://alga.me)
- [https://www.linkedin.com/in/akgleal](https://www.linkedin.com/in/akgleal)
- [https://github.com/4lg4](https://github.com/4lg4)

