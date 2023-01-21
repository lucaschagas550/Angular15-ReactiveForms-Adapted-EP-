import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "../../task";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {

  @Input()
  list!: Task[] | null;

  @Output()
  toggle = new EventEmitter<any>(); //emite o evento

  toggleItem(index: number, acao: string) {
    if (this.list) {
      const task = this.list[index];

      switch (acao) {
        case 'iniciar':
          task.finalizado = false;
          task.iniciado = true;
          break;
        case 'finalizar':
          task.finalizado = true;
          task.iniciado = false;
          break;
        case 'retomar':
          task.finalizado = false;
          task.iniciado = true;
          break;
        case 'cancelar':
          task.finalizado = false;
          task.iniciado = false;
          break;
      }

      //emite o evento da task de um novo objeto para o task
      this.toggle.emit({
        task: { ...task }
      });
    }
  }

}