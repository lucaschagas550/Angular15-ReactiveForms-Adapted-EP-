import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';

@Injectable()
export class TasksService {

  //HttpClient tem que estar registrado no module para funcionar
  constructor(private http: HttpClient) { }

  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist');

  /* getToDoList(): Observable<Task[]> {
    return this.http
      .get<Task[]>('http://localhost:3000/todolist');
  } */
}