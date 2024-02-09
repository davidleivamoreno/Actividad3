import { Component } from '@angular/core';
import { Producto } from '../productos.interface';
import { ProductoServicioService } from '../../producto-servicio.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NgIf,NgFor,ReactiveFormsModule,JsonPipe,NgClass],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  productoRecogido:Producto|null=null;
  productos: Producto[]=[];
  dFormulario:FormGroup;
  datosFormulario = {
    nombre: '',
    categoria:'',
    precio:0
  }

  constructor(private _productoServicioService:ProductoServicioService){
    this.productos=_productoServicioService.getProductos();
   this.dFormulario=new FormGroup({
    'nombre':new FormControl('',[Validators.required]),
    'precio':new FormControl(0,[Validators.min(3)]),
    'categoria':new FormControl('',[Validators.required,Validators.minLength(3)])

  })
  this._productoServicioService.productosChanged.subscribe(()=>{
    this.productos=_productoServicioService.getProductos();
  })
  }


  enviar() {
    console.log("DATA FORM");
    // console.log(this.dFormulario);
    console.log(this.dFormulario.value);
       // crearObjetoServicio(this.datosFormulario)
      // crearObjetoServicio(f.value())
     this._productoServicioService.crear(this.dFormulario.value)
    }



}
