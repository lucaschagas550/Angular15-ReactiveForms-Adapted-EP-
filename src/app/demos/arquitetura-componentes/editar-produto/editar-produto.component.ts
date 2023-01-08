import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {

  produto !: Produto;

  constructor(private router: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.router.params
      .subscribe(params => {
        var produto = this.produtoService.obterPorId(params['id']);
        if (produto === undefined) {
          //ng-template talvez (sugestao minha) produto nao encontrado
        }
        else {
          this.produto = produto;
        }
        console.log('produto:', this.produto);
      })
  }

  salvar() {
    // fazer comunicacao com backend

    // this.router.navigate(['/produtos']);
    //this.router.navigateByUrl('/produtos');
  }
}
