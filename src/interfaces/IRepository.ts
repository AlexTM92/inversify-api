import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity> {
  get(): T[];
  getById(id: number): T | undefined;
  add(entity: T): number;
  edit(id: number, entity: T): T | undefined;
  delete(id: number): T | undefined;
}
