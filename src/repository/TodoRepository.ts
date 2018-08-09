import { IRepository } from '../interfaces/IRepository';
import { Todo } from '../models/Todo';

export class TodoRepository implements IRepository<Todo> {
  private todoList: Todo[] = [
    new Todo(1, 'calculate', false, new Date()),
    new Todo(2, 'copy', false, new Date()),
    new Todo(3, 'navigate', false, new Date()),
    new Todo(4, 'override', false, new Date())
  ];

  get(): Todo[] {
    return this.todoList;
  }
  getById(id: number): Todo | undefined {
    return this.todoList.find(todo => todo.id === id);
  }
  add(entity: Todo): number {
    return this.todoList.push(entity);
  }
  edit(id: number, entity: Todo): Todo | undefined {
    const todo: Todo | undefined = this.todoList.find(todo => todo.id === id);

    if (todo !== undefined) {
      todo.title = entity.title;
      todo.completed = entity.completed;
      todo.endDate = entity.endDate;
    }

    return todo;
  }
  delete(id: number): Todo | undefined {
    const todoIndex = this.todoList.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      return this.todoList.splice(todoIndex, 1)[0];
    }
    return undefined;
  }
}
