import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LogoComponent } from '../../cabecera/logo/logo.component';
import { Producto } from '../productos.module';
import { ProductoServicioService } from '../../producto-servicio.service';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf,LogoComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: Producto[]=[];
  eliminado: Producto|null = null;
  encontrado:boolean=true;
  constructor(private _productoServicioService:ProductoServicioService){
    this.productos=_productoServicioService.getProductos();
    this._productoServicioService.productosChanged.subscribe(()=>{ this.productos=_productoServicioService.getProductos();})

  }

  eliminar(producto:string):void {
    let Respuesta:Producto|null;
    Respuesta=this._productoServicioService.eliminar(producto)
    this.eliminado=Respuesta;
    let pos=this.productos.findIndex((item)=> item.nombre == producto );
    this.encontrado=(this.eliminado!=null)
    // console.log("Eliminando " + producto + " de posición " + pos)
    if(pos>=0) {
      this.eliminado = this.productos[pos];
      this.productos.splice(pos, 1);
      this.encontrado=true;

    }
    setTimeout(() => {
      this.eliminado = null;
      this.encontrado=true;
    }, (1000));
  }
}
