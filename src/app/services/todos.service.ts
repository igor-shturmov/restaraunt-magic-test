import { Injectable } from '@angular/core';
import { TodosStore } from '../store/todos.store';
import { TodosQuery } from '../store/todos.query';
import { createTodo, Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  public readonly todos$: Observable<Todo[]> = this.todosQuery.selectAll();
  public readonly completedTodos$: Observable<Todo[]> = this.todosQuery.selectAll({ filterBy: entity => entity.completed });
  public readonly incompleteTodos$: Observable<Todo[]> = this.todosQuery.selectAll({ filterBy: entity => !entity.completed });

  constructor(private todosStore: TodosStore,
              private todosQuery: TodosQuery) {
  }

  public addTodo(title: string): void {
    const todo = createTodo({ id: Math.random(), title });
    this.todosStore.add(todo);
  }

  public updateTodo({ id, completed }: Todo): void {
    this.todosStore.update(id, {
      completed: !completed
    });
  }
}
