import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  public usuarioLogeado:Usuario;

  constructor(private router:Router)
  {
    this.usuarioLogeado = new Usuario("usuario@usuario.com", "usuario");
  }

  ngOnInit() {
  }

  public loguear():void
  {
    //console.log(this.usuarioLogeado);
    if(this.usuarioLogeado.nombre === "usuario@usuario.com" && this.usuarioLogeado.clave === "usuario")
    {
      this.usuarioLogeado.error = false;
      this.usuarioLogeado.ok = true;
      //this.router.navigateByUrl("/bienvenido");
    }
    else
    {
      //this.router.navigateByUrl("/error");
      this.usuarioLogeado.ok = false;
      this.usuarioLogeado.error = true;
    }

  }

}
