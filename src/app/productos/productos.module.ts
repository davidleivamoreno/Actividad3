import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { Producto } from './productos.interface';
import { FormularioComponent } from './formulario/formulario.component';

export{Producto}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoComponent,FormularioComponent
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductosModule { }

