import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  constructor() { }
  private _usuarios: Usuario[]= [
    {nombre: "Mario", edad: 2.50, profesion: "Herrero"},
    {nombre: "Ismael", edad: 5, profesion: "Escudero"},
    {nombre: "Dario", edad: 3.50, profesion: "Arquero"},
    {nombre: "Luis", edad: 1.50, profesion: "Asesino"},
    {nombre: "David", edad: 4.50, profesion: "Tanque de batalla"}
  ]
}
