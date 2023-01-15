import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';

export function BarFactory(http: HttpClient, injector: Injector) {
  return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
  ) { }

  public obterUnidade(): string {
    return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken
  }

  obterBebidas(): string {
    return 'bebidas';
  }

  obterPorcoes(): string {
    return 'porcoes';
  }

  obterRefeicoes(): string {
    return 'refereicoes';
  }
}


export class BarServicesMock {

  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeicoes(): string {
    return 'Mock';
  }
}