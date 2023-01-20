import { Store } from './todo.store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TasksService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TasksService,
    Store,
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent
  ]
})
export class TodoModule { }
