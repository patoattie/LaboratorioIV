import { MihttpService } from './servicios/mihttp/mihttp.service';
import { PaisesService } from './servicios/paises/paises.service';
import { PaisesComponent } from './componentes/paises/paises.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoDeUsuariosComponent } from './componentes/listado-de-usuarios/listado-de-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { GrillaUsuariosComponent } from './componentes/grilla-usuarios/grilla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from './servicios/peliculas/peliculas.service';
import { HttppeliculasService } from './servicios/httppeliculas/httppeliculas.service';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasComponent } from './componentes/peliculas/peliculas/peliculas.component';


/*const miRuteo = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'paises', component: PaisesComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: ErrorComponent } //Error
];*/

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    GrillaUsuariosComponent,
    PaisesComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(miRuteo),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PaisesService, MihttpService, PeliculasService, HttppeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
