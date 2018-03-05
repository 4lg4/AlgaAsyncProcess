/**
 * Created by www.Alga.me on 27/2/18.
 */

const AlgaAsyncProcess = async (promise) => {
  try {
    let result = await promise;

    if (result instanceof Array) {
      result.unshift(null);
      return result;
    }
    return [null, result];
  } catch (err) {
    return [err];
  }
};

export default AlgaAsyncProcess;

module.exports.reject = (messsage)=> {
  return Promise.reject(messsage);
};

module.exports.resolve = (data)=> {
  return Promise.resolve(data);
};

