import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { FormularioComponent } from "./productos/formulario/formulario.component";
import { CabeceraModule } from './cabecera/cabecera.module';
import { LogoComponent } from './cabecera/logo/logo.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ListadoUsuarioComponent } from './usuario/listado-usuario/listado-usuario.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductosModule, FormularioComponent,CabeceraModule,LogoComponent,UsuarioModule,ListadoUsuarioComponent]
})
export class AppComponent {
  title = '02-productos';
}
