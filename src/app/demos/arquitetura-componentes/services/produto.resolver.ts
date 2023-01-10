import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";
import { ProdutoService } from "./produto.service";

@Injectable()
export class ProdutoResolver implements Resolve<Produto[]> {

    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot): Produto[] {
        return this.produtoService.obterTodos(route.params['estado']);
    }
}