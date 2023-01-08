import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";

//Auto roteamento atraves do router-outlet do arquivo produto.app.component.html
const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [ // rota filha => localhost:5000/produtos/editar filha eh o editar
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: EditarProdutoComponent }, //obter o id do produto, id com mesmo nome para recuperar parametro da rota no ActivatedRoute
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig) //Module de roteamento para modulo filho
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule { }