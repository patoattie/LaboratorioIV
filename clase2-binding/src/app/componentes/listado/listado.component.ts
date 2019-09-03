import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() listadoUsuarios: Usuario[];

  constructor() 
  {
    /*this.listadoUsuarios.push(new Usuario("juan", "juan"));
    this.listadoUsuarios.push(new Usuario("ana", ",ana"));
    this.listadoUsuarios.push(new Usuario("andrea", "andrea"));*/
  }

  ngOnInit() {
  }

}
