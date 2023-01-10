import { ProdutoCountComponent } from './componentes/produto-count.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt); // formatar a moeda para pt-br


import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.route';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoService } from './services/produto.service';
import { ProdutoResolver } from './services/produto.resolver';


@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
    ],
    providers: [
        ProdutoService,
        ProdutoResolver,
    ],
    exports: [],
})

export class ProdutoModule { }