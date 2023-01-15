import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService } from './bar.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    BarComponent,
  ],
  providers: [
    BarService,
  ]

})
export class BarModule {
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders<BarModule> {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config }
      ]//providers do module + os declarados aqui
    }
  }

  static forChild(): ModuleWithProviders<BarModule> { //da para selecionar o tipo de modulo que tu quer forRoot ou Child, no app.module
    return {
      ngModule: BarModule,
      providers: [

      ]
    }
  }
}
