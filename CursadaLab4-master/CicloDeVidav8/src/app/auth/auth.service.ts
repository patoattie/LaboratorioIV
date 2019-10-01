import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { Usuario } from "../clases/usuario";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean;
  usuarioLogueado: Usuario;

  constructor() 
  {
    this.isLoggedIn = false;
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usuario: Usuario): Observable<boolean> 
  {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioLogueado = usuario;

    return of(true).pipe(
      delay(1000),
      tap(val => 
        {
          this.isLoggedIn = true;
        })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('usuario', null);
    this.usuarioLogueado = null;
  }
}
