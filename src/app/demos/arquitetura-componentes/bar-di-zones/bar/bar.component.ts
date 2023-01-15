import { BarService } from './bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarService, useClass: BarService } //BarServicesMock retorna a classes mock do service
  ]
})
export class BarComponent implements OnInit {

  barBebida1!: string;

  constructor(
    private barServices: BarService,
  ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    console.log(this.barBebida1);
  }

}
