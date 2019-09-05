import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit 
{
  nuevoUsuario: Usuario;
  confirmacionClave: string;
  @Output() usuarioCreado: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() 
  {
    this.inicializarDatos();
  }

  ngOnInit() {
  }

  muestraBoton(): boolean
  {
    return (this.nuevoUsuario.clave === this.confirmacionClave 
      && this.nuevoUsuario.clave.trim().length != 0 
      && this.nuevoUsuario.nombre.trim().length != 0);
  }

  cargarUsuario(): void
  {
    this.usuarioCreado.emit(new Usuario(this.nuevoUsuario.nombre, this.nuevoUsuario.clave));
    //this.inicializarDatos();
  }

  inicializarDatos(): void
  {
    this.nuevoUsuario = new Usuario("", "");
    this.confirmacionClave = "";
  }

}
