import { Injectable } from '@angular/core';
import { HttppeliculasService } from "../httppeliculas/httppeliculas.service";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpPeliculas: HttppeliculasService) { }

  BuscarTodos() {
    return this.httpPeliculas.httpGetO();
  }

  BuscarCfg() {
    return this.httpPeliculas.httpGetCfg();
  }
}
