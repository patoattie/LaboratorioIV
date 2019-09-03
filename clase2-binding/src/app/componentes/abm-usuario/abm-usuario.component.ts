import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import {  } from "../listado/listado.component";

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit {
  nuevoUsuario: Usuario;
  confirmacionClave: string;
  accionAlta: boolean = false;
  listadoUsuarios: Usuario[] = new Array();

  constructor() 
  {
    this.inicializarDatos();
  }

  ngOnInit(){
  }

  muestraListado(): boolean
  {
    return this.accionAlta;
  }

  muestraBoton(): boolean
  {
    return (this.nuevoUsuario.clave === this.confirmacionClave && this.nuevoUsuario.clave.length != 0);
  }

  cargarUsuario(): void
  {
    this.listadoUsuarios.push(this.nuevoUsuario);
    this.inicializarDatos();
  }

  inicializarDatos(): void
  {
    this.nuevoUsuario = new Usuario("", "");
    this.confirmacionClave = "";
  }

}
