import { Component, OnInit } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  unUsuario:Usuario;
  title:string;

  //Si como parámetro del constructor tengo un objeto, entonces significa que se inyecta mediante un servicio.
  constructor()
  {
    this.unUsuario = new Usuario("Bienvenido");
  }

  ngOnInit()
  {
    this.title = this.unUsuario.getTitulo();
  }
}
