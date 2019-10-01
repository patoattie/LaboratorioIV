import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { MihttpService } from '../mihttp/mihttp.service';
import { Pais } from 'src/app/clases/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  public paisSeleccionado: Pais;

  constructor(private miHttp: MihttpService, private router: Router) 
  {
    this.paisSeleccionado = JSON.parse(localStorage.getItem('paisSeleccionado'));
  }

  BuscarTodos() {
    return this.miHttp.httpGetO('all');
  }

  detalle(unPais: Pais)
  {
    this.paisSeleccionado = unPais;
    localStorage.setItem('paisSeleccionado', JSON.stringify(unPais));
    this.router.navigate(['detalle-pais']);
  }
}
