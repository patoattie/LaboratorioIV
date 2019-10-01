import { PaisesService } from './../../servicios/paises/paises.service';
import { AuthService } from "../../auth/auth.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:  [ PaisesService ]
})
export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService, private authService: AuthService) { }

  public paises = [];
  public usuario = {};

  ngOnInit() {
    this.usuario = this.authService.usuarioLogueado;
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
  }

}
