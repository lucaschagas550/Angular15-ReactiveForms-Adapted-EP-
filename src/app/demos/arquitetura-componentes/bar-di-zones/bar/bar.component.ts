import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BebidaService } from './bar.service';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{ provide: BarService, useClass: BarService }, //BarServicesMock retorna a classes mock do service
    //{ provide: BarService, useFactory: BarFactory, deps: [HttpClient, Injector] } //deps passa as dependecias para o factory
    { provide: BebidaService, useExisting: BarService } //deps passa as dependecias para o factory
  ]
})
export class BarComponent implements OnInit {

  configManual!: BarUnidadeConfig;
  config!: BarUnidadeConfig;
  barBebida1!: string;
  barBebida2!: string;
  dadosUnidade!: string;

  constructor(
    private barServices: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig, //injecao do token que eh recebido no metodo forRoot no modulo
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig, //injecao do token que eh recebido no metodo forRoot no modulo
    private bebidaService: BebidaService,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();
    console.log(this.barBebida1);
  }

  public progress: number = 0;
  public label!: string;

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular!'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado fora!'); });
      });
    });
  }


  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }

  }
}
