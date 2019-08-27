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
  public usuario:Usuario;

  constructor(private router:Router)
  {
    this.usuario = new Usuario("usuario@usuario.com", "usuario");
  }

  ngOnInit() {
  }

  public loguear():void
  {
    //console.log(this.usuario);
    if(this.usuario.nombre === "usuario@usuario.com" && this.usuario.clave === "usuario")
    {
      this.usuario.error = false;
      this.usuario.ok = true;
      //this.router.navigateByUrl("/bienvenido");
    }
    else
    {
      //this.router.navigateByUrl("/error");
      this.usuario.ok = false;
      this.usuario.error = true;
    }

  }

}
