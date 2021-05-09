import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosContainerComponent } from './containers/todos-container/todos-container.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosContainerComponent,
    TodosListComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
