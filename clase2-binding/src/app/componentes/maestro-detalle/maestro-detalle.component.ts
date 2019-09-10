import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  listado: Usuario[] = new Array();
  usuarioSeleccionado: Usuario;

  constructor() { }

  ngOnInit() {
  }

  procesarAltaUsuario($event: any): void
  {
    this.listado.push($event);
  }

  procesarSeleccion($event: any): void
  {
    //this.usuarioSeleccionado = new Usuario($event.nombre, $event.clave);
    this.usuarioSeleccionado = $event;
  }
}
