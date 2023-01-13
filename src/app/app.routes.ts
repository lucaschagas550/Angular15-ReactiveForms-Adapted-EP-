import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    {
        path: 'cadastro',
        component: CadastroComponent,
        canDeactivate: [CadastroGuard] //Impede que usuario saia da tela, exemplo, exibir uma mensagem se realmente deseja abandonar a tela
    },
    {
        path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module') //Lazy-load, carregamento tardio
            .then(m => m.ProdutoModule)
    },
    {
        path: 'admin',
        canLoad: [AuthGuard], //Diz se eu posso ou nao carregar o module especifico
        canActivate: [AuthGuard], //Diz se posso acessar um recurso, no caso preciso estar logado para acessar o recurso de admin alem de ser admin
        loadChildren: () => import('./admin/admin.module') //Lazy-load, carregamento tardio
            .then(m => m.AdminModule),
    },

    { path: '**', component: NotFoundComponent }, // Caso nao encontrar caminho certo, vai cair aqui, sempre deixar por ultimo 
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false }) //Module de roteamento para modulo principal
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
