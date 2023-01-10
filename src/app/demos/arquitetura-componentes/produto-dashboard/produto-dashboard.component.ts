import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { ProdutoCardDetalheComponent } from '../componentes/produto-card-detalhe.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html'
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos!: Produto[]

  //NAO EH RECOMENDADO ALTERAR ELEMENTOS APENAS INTERAGIR
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef | undefined
  //Extrair componente da sua view
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent | undefined

  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent> | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos']; // pega os dados de produtos que foi instanciado no produto.route

    // this.produtos = [{
    //   id: 1,
    //   nome: 'Teste',
    //   ativo: true,
    //   valor: 100,
    //   imagem: 'celular.jpg'
    // },
    // {
    //   id: 2,
    //   nome: 'Teste 2',
    //   ativo: true,
    //   valor: 200,
    //   imagem: 'gopro.jpg'
    // },
    // {
    //   id: 3,
    //   nome: 'Teste 3',
    //   ativo: true,
    //   valor: 300,
    //   imagem: 'laptop.jpg'
    // },
    // {
    //   id: 4,
    //   nome: 'Teste 4',
    //   ativo: true,
    //   valor: 400,
    //   imagem: 'mouse.jpg'
    // },
    // {
    //   id: 5,
    //   nome: 'Teste 5',
    //   ativo: true,
    //   valor: 500,
    //   imagem: 'teclado.jpg'
    // },
    // {
    //   id: 6,
    //   nome: 'Teste 6',
    //   ativo: false,
    //   valor: 600,
    //   imagem: 'headset.jpg'
    // }];
  }

  ngAfterViewInit(): void {
    //Alterando componente filho da sua view, Teste apenas
    setTimeout(() => {
      console.log('objeto do contaodor: ', this.contador?.produtos);
      // this.contador?.produtos.splice(5, this.contador?.produtos.length);
      console.log('objeto do contaodor deletado:  ', this.contador?.produtos);
      console.log(this.botoes?.forEach(p => console.log(p.produto)));
    }, 1000);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela?.nativeElement, 'click');
    clickTexto.subscribe((event: any) => { //Type is PointerEvent
      console.log(event)
      return;
    });

    //ViewChildren lista de itens nao modificados
    console.log(this.botoes?.forEach(p => console.log(p.produto)));
  }

  mudarStatus(event: Produto): void {
    event.ativo = !event.ativo;
  }
}
