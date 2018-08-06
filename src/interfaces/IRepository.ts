import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity> {
  get(): T[];
  getById(id: number): T;
}
