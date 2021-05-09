import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  @Input() title: string;
  @Input() todos: Todo[];

  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
}
