import { IEntity } from '../interfaces/IEntity';

export class Todo implements IEntity {
  constructor(id: number, title: string, completed: boolean, endDate: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.endDate = endDate;
  }

  public id: number;
  public title: string;
  public completed: boolean;
  public endDate: Date;
}
