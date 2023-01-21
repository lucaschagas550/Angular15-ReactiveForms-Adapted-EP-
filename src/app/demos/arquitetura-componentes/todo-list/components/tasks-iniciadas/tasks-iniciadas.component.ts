import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$!: Observable<any[]>;

  constructor(
    private tasksService: TasksService,
    private store: Store) { }

  ngOnInit() {
    this.iniciados$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));
  }

  onToggle(event: any) {
    this.tasksService.toggle(event);
  }
}