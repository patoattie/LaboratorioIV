import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  public pais = {};

  constructor(public paisesService: PaisesService) { }

  ngOnInit() {
    this.pais = this.paisesService.paisSeleccionado;
  }

}
