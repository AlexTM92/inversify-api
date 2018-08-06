import { IEntity } from '../interfaces/IEntity';

export class User {
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public id: number;
  public name: string;
  public email: string;
}
