import { QueryConfig, QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todos.store';

@QueryConfig({ sortBy: 'id' })
export class TodosQuery extends QueryEntity<TodosState> {
  constructor(protected store: TodosStore) {
    super(store);
  }
}
