export class UsersService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  getUsers(): object[] {
    return this.users;
  }

  getUser(id) {
    return this.users.find((user) => user.id == id);
  }
}
