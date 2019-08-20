import { Component, OnInit } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  unUsuario:Usuario;
  title:string;

  constructor()
  {
    this.unUsuario = new Usuario("Bienvenido");
  }

  ngOnInit()
  {
    this.title = this.unUsuario.titulo;
  }
}
