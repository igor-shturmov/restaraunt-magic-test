import { Todo } from '../models/todo';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TodosState extends EntityState<Todo> {}

@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState>  {
  constructor() {
    super();
  }
}
