import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosContainerComponent } from './containers/todos-container/todos-container.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosStore } from './store/todos.store';
import { TodosQuery } from './store/todos.query';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { environment } from '../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

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
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [TodosStore, TodosQuery, { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
