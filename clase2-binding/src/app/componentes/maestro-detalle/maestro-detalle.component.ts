import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  listado: Usuario[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  procesarAltaUsuario(nuevoUsuario: any): void
  {
    this.listado.push(nuevoUsuario);
  }

}
