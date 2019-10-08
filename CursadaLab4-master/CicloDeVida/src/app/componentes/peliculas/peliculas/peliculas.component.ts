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
  public detalle = [];
  public configuracion = [];

  ngOnInit() 
  {
    this.peliculasService.BuscarTodos().subscribe((peliculas) => 
    {
      this.peliculas = peliculas.results;
      
      this.peliculas.forEach(unaPelicula => 
      {
        this.getDetalle(unaPelicula.id);
      });
    });

    this.peliculasService.BuscarCfg().subscribe((config) => 
    {
      this.configuracion = config.results;
    });
  }

  public async getDetalle(id :string)
  {
    await this.peliculasService.BuscarDetalle(id).subscribe((pelicula) => 
    {
      this.detalle.push(pelicula);
    });
  }

}
