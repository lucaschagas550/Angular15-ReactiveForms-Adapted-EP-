import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) { }

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