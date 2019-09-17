import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from "./componentes/paises/paises.component";
import { PeliculasComponent } from './componentes/peliculas/peliculas/peliculas.component';

const routes: Routes = [
  { path: 'paises', component: PaisesComponent },
  { path: 'peliculas', component: PeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }