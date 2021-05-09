import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoFormComponent {
  @Input() todos: Todo[];

  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp('^[a-z0-9](?!.*?[^\\na-z0-9]{2}).*'))
    ]),
  });

  public onAddTodo(): void {
    this.addTodo.emit(this.form.value.title);
    this.form.reset();
  }

  get isTitleUnique(): boolean {
    return !this.todos.find(todo => todo.title === this.form.value.title);
  }
}
