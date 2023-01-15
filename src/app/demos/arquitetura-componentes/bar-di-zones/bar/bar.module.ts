import { BarService } from './bar.service';
import { NgModule } from '@angular/core';
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
export class BarModule { }
