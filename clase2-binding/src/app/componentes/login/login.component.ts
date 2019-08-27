import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  public usuarioLogeado:Usuario;

  constructor()
  {
    this.usuarioLogeado = new Usuario();
  }

  ngOnInit() {
  }

  public loguear():void
  {
    console.log(this.usuarioLogeado);
  }

}
