var expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var latitude = 5;
    var longitude = 6;
    var from = 'Daniel';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.createdAt).toBeA('number');
  })
});
