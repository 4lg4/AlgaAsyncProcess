/**
 * Created by www.Alga.me on 28/2/18.
 */

import assert from 'assert';
// import AlgaAsyncProcess, {resolve, reject} from '../dist/index';
import algaAsyncProcess, {resolve, reject} from '../src/index';

describe(`AlgaAsyncProcess https://github.com/4lg4/AlgaAsyncProcess`, ()=> {
  describe(`default`, ()=> {
    it(`should return variable as a success`, async () => {
      const expected = 'RIGHT';
      const [err, success] = await algaAsyncProcess(Promise.resolve(expected));
      assert.equal(success, expected);
    });

    it(`should return variable as an error`, async () => {
      const expected = 'ERROR';
      const [err, success] = await algaAsyncProcess(Promise.reject(expected));
      assert.equal(err, expected);
    });

    it(`should return an array of objects`, async () => {
      const expected = [{id: 1},{id: 2},{id: 3},{id: 4}];
      const [err, success] = await algaAsyncProcess(Promise.resolve(expected));
      assert.equal(success, expected);
    });

    it(`should return an array resulted from the promise all`, async () => {
      const expected = ['RIGHT', 'RIGHT2', 'RIGHT3'];
      const [err, a, b, c] = await algaAsyncProcess(Promise.all([
        Promise.resolve(expected[0]),
        Promise.resolve(expected[1]),
        Promise.resolve(expected[2]),
      ]), true);
      const result = [a, b, c];
      assert.deepEqual(result, expected);
    });
  });

  describe(`helpers`, ()=> {
    it(`resolve, should return variable as a success`, () => {
      const expected = 'RIGHT';
      return Promise.resolve(resolve(expected)).then((success)=>assert.equal(success, expected));
    });

    it(`reject, should return variable as an error`, () => {
      const expected = 'ERROR';
      return Promise.resolve(reject(expected)).catch((err)=>assert.equal(err, expected));
    });
  });

});
