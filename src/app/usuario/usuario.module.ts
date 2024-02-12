import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { Usuario } from './usuario.interface';
export{Usuario}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,ListadoUsuarioComponent,FormularioUsuarioComponent
  ]
})
export class UsuarioModule { }
