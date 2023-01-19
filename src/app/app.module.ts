import { AuthGuard } from './services/app.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt); // formatar a moeda para pt-br

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPiper } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/arquitetura-componentes/bar-di-zones/bar/bar.module';
import { TodoModule } from './demos/arquitetura-componentes/todo-list/todo.module';

// export const BAR_PROVIDERS: Provider[] = [
//     BarService,
// ];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPiper, // ao injetar direito no component como provider, precisa se injetar como declartions, nao recomendado, sempre preciorisar deixar no modulo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    // BAR_PROVIDERS,
    TodoModule,
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
