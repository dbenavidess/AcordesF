import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { BaseComponent } from './base/base.component';
import { materialCompo } from './ImportsMaterial';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BarraComponent, BaseComponent],
  imports: [
    CommonModule,
    materialCompo,
    AppRoutingModule
  ],
  exports:[BarraComponent,BaseComponent] 
})
export class PagInicioModule { }
