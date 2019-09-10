import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "src/app/clases/usuario";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() listadoUsuarios: Usuario[];
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  usuario: Usuario;

  constructor() 
  {
    /*this.listadoUsuarios.push(new Usuario("juan", "juan"));
    this.listadoUsuarios.push(new Usuario("ana", ",ana"));
    this.listadoUsuarios.push(new Usuario("andrea", "andrea"));*/
  }

  ngOnInit() {
  }

  editarUsuario(usuarioEditado: Usuario): void
  {
    this.usuarioSeleccionado.emit(usuarioEditado);
  }
}
