import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.route';

@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
    ],
    providers: [],
    exports: [],
})

export class ProdutoModule { }