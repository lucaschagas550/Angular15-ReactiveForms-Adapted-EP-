import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService } from './bar.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{ provide: BarService, useClass: BarService }, //BarServicesMock retorna a classes mock do service
    { provide: BarService, useFactory: BarFactory, deps: [HttpClient, Injector] } //deps passa as dependecias para o factory
  ]
})
export class BarComponent implements OnInit {

  configManual!: BarUnidadeConfig;
  config!: BarUnidadeConfig;
  barBebida1!: string;
  dadosUnidade!: string;

  constructor(
    private barServices: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig, //injecao do token que eh recebido no metodo forRoot no modulo
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig //injecao do token que eh recebido no metodo forRoot no modulo
  ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();
    console.log(this.barBebida1);
  }

}
