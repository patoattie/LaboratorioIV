import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { ListadoComponent } from "src/app/componentes/listado/listado.component";

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  listadoUsuarios: Usuario[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  procesarAltaUsuario(nuevoUsuario: any): void
  {
    this.listadoUsuarios.push(nuevoUsuario);
  }

}
