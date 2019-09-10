import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit 
{
  confirmacionClave: string;
  @Output() usuarioCreado: EventEmitter<any> = new EventEmitter<any>();
  @Input() usuarioParaEditar: Usuario;
  @Input() estadoABM: string;
  
  constructor() { }

  ngOnInit() 
  {
    this.usuarioParaEditar = new Usuario("", "");
    this.inicializarDatos();
  }

  muestraBotonCrear(): boolean
  {
    return (this.usuarioParaEditar.clave === this.confirmacionClave 
      && this.usuarioParaEditar.clave.trim().length != 0 
      && this.usuarioParaEditar.nombre.trim().length != 0
      && this.estadoABM == "A");
  }

  muestraBotonModificar(): boolean
  {
    return (this.usuarioParaEditar.clave === this.confirmacionClave 
      && this.usuarioParaEditar.clave.trim().length != 0 
      && this.usuarioParaEditar.nombre.trim().length != 0
      && this.estadoABM == "M");
  }

  muestraBotonCancelar(): boolean
  {
    return (this.estadoABM == "M" || this.estadoABM == "B");
  }

  cargarUsuario(): void
  {
    this.usuarioCreado.emit(new Usuario(this.usuarioParaEditar.nombre, this.usuarioParaEditar.clave));
    this.usuarioParaEditar = new Usuario("", "");
    this.inicializarDatos();
  }

  modificarUsuario(): void
  {
    //this.usuarioCreado.emit(new Usuario(this.usuarioParaEditar.nombre, this.usuarioParaEditar.clave));
    this.inicializarDatos();
  }

  inicializarDatos(): void
  {
    //this.usuarioParaEditar = new Usuario("", "");
    this.confirmacionClave = "";
    this.estadoABM = "A";
  }

}
