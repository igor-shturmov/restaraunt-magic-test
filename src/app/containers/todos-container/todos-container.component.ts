import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent {
  todos$: Observable<Todo[]> = this.todosService.todos$;
  completedTodos$: Observable<Todo[]> = this.todosService.completedTodos$;
  incompleteTodos$: Observable<Todo[]> = this.todosService.incompleteTodos$;

  constructor(private todosService: TodosService) { }

  public addTodo(title: string): void {
    this.todosService.addTodo(title);
  }

  public updateTodo(todo: Todo): void {
    this.todosService.updateTodo(todo);
  }

}
