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

  constructor(private miHttp: MihttpService, private router: Router) { }

  BuscarTodos() {
    return this.miHttp.httpGetO('all');
  }

  detalle(unPais: Pais)
  {
    this.paisSeleccionado = unPais;
console.log(this.paisSeleccionado);
    this.router.navigate(['detalle-pais']);
  }
}
