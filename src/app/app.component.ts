import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { FormularioComponent } from "./productos/formulario/formulario.component";
import { CabeceraModule } from './cabecera/cabecera.module';
import { LogoComponent } from './cabecera/logo/logo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductosModule, FormularioComponent,CabeceraModule,LogoComponent]
})
export class AppComponent {
  title = '02-productos';
}
