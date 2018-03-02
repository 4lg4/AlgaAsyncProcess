/**
 * Created by www.Alga.me on 27/2/18.
 */

const AlgaAsyncProcess = async (promise) => {
  try {
    return [null, await promise];
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

