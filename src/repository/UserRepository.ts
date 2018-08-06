import { IRepository } from '../interfaces/IRepository';
import { User } from '../models/User';

export class UserRepository implements IRepository<User> {
  private userList: User[] = [
    new User(1, 'Chloe', 'Dovie12@yahoo.com'),
    new User(2, 'Ivah', 'Deondre.Smith19@yahoo.com'),
    new User(3, 'Brian', 'Lance_Ziemann58@hotmail.com'),
    new User(4, 'Lucio', 'Kolby.Gaylord@hotmail.com')
  ];

  get(): User[] {
    return this.userList;
  }
  getById(id: number): User | undefined {
    return this.userList.find(user => user.id === id);
  }
  add(entity: User): number {
    return this.userList.push(entity);
  }
  edit(id: number, entity: User): User | undefined {
    const user: User | undefined = this.userList.find(user => user.id === id);

    if (user !== undefined) {
      user.name = entity.name;
      user.email = entity.email;
    }

    return user;
  }
  delete(id: number): User | undefined {
    const userIndex = this.userList.findIndex(user => user.id === id);
    if (userIndex > -1) {
      return this.userList.splice(userIndex, 1)[0];
    }
    return undefined;
  }
}
