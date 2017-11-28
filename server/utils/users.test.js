const expect = require('expect');

const {Users} = require('./users');



describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }];
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Daniel',
      room: 'Ranmaa'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('S');
    expect(user).toNotExist();
  });

  it('should find user', () => {
    var user = users.getUser('2');
    expect(user).toExist();
    expect(user).toInclude(users.users[1]);
  });

  it('should not find user', () => {
    var user = users.getUser('S');
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  });
});
