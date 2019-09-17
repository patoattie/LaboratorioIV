import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../../servicios/peliculas/peliculas.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'] ,
  providers:  [ PeliculasService ]
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  public peliculas = [];
  public configuracion = [];

  ngOnInit() 
  {
    this.peliculasService.BuscarTodos().subscribe((peliculas) => 
    {
      this.peliculas = peliculas.results;
    });

    this.peliculasService.BuscarCfg().subscribe((config) => 
    {
      this.configuracion = config.results;
    });
  }

}
