import { Todo } from '../models/Todo';
import { IRepository } from '../interfaces/IRepository';

export class TodoService {
  private repository: IRepository<Todo>;

  constructor(repository: IRepository<Todo>) {
    this.repository = repository;
  }

  get(): Todo[] {
    return this.repository.get();
  }

  getById(id: number): Todo | undefined {
    return this.repository.getById(id);
  }

  add(todo: Todo): number {
    return this.repository.add(todo);
  }

  edit(id: number, todo: Todo): Todo | undefined {
    return this.repository.edit(id, todo);
  }

  delete(id: number): Todo | undefined {
    return this.repository.delete(id);
  }
}
