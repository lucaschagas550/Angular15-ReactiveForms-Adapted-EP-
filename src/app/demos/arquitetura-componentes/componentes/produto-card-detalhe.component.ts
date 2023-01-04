import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Produto } from "../models/produto";

@Component({
    selector: "produto-card-detalhe",
    templateUrl: "./produto-card-detalhe.component.html"
})

export class ProdutoCardDetalheComponent {

    @Input()
    produto !: Produto;

    @Output()
    status: EventEmitter<any> = new EventEmitter<any>();

    //Emite o evento para o componente pai
    emitirEvento(): void {
        this.status.emit(this.produto);
    }

}