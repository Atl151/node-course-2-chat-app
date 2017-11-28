const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var value = isRealString({name: 'Daniel'});
    expect(value).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var value = isRealString('      ');
    expect(value).toBe(false);
  });

  it('should allow string with non-spaces characters', () => {
    var value = isRealString('DanielGarcia');
    expect(value).toBe(true);
  });
});
