var expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Daniel';
    var text = 'Some text';
    var message = generateMessage(from, text);
    expect(message).toInclude({
      from,
      text
    });
    expect(message.createdAt).toBeA('number');
  });
});
