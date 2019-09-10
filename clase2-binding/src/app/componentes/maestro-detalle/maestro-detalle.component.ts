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
  estadoABM: string;

  constructor() { }

  ngOnInit() {
  }

  procesarAltaUsuario($event: any): void
  {
    this.listado.push($event);
  }

  procesarSeleccion($event: any): void
  {
    this.usuarioSeleccionado = $event;
  }

  procesarEstado($event: any): void
  {
    this.estadoABM = $event;
  }
}
