import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from './task';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  tarefaForm!: FormGroup;
  tarefa!: Task;

  constructor(private fb: FormBuilder, private tasksService: TasksService) { }

  adicionarTarefa() {
    if (this.tarefaForm.dirty && this.tarefaForm.valid) {
      var novaTarefa = Object.assign({}, this.tarefa, this.tarefaForm.value);

      this.tasksService.adicionar(novaTarefa);
      this.tarefaForm.reset();
    }
  }

  ngOnInit() {
    this.tarefaForm = this.fb.group({
      nome: [''],
    });
  }
}