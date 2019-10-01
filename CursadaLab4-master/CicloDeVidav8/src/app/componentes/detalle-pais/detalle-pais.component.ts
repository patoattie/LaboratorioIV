import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  constructor(public paisesService: PaisesService) { }

  ngOnInit() {
    console.log(this.paisesService.paisSeleccionado);
  }

}
