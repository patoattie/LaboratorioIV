import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit 
{
  //nuevoUsuario: Usuario;
  confirmacionClave: string;
  @Output() usuarioCreado: EventEmitter<any> = new EventEmitter<any>();
  @Input() usuarioParaEditar: Usuario;
  
  constructor() 
  {
  }

  ngOnInit() {
    this.inicializarDatos();
  }

  muestraBoton(): boolean
  {
    return (this.usuarioParaEditar.clave === this.confirmacionClave 
      && this.usuarioParaEditar.clave.trim().length != 0 
      && this.usuarioParaEditar.nombre.trim().length != 0);
  }

  cargarUsuario(): void
  {
    this.usuarioCreado.emit(new Usuario(this.usuarioParaEditar.nombre, this.usuarioParaEditar.clave));
    this.inicializarDatos();
  }

  inicializarDatos(): void
  {
    //this.nuevoUsuario = new Usuario("", "");
    this.usuarioParaEditar = new Usuario("", "");
    this.confirmacionClave = "";
  }

}
