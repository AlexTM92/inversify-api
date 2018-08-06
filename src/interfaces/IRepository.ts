import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity> {
  get(): T[];
  getById(id: number): T;
  add(entity: T): number;
  edit(id: number, entity: T): T;
  delete(id: number): T;
}
