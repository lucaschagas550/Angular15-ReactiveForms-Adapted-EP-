import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent },
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