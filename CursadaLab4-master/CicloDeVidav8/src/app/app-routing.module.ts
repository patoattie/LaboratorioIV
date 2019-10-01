import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';

import { RouterModule } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { AuthGuard } from './auth/auth.guard';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';

const miRuteo = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent, data: {animation: 'Login'} },
  { path: 'usuario', component: UsuarioComponent,
    canActivate: [AuthGuard],
    data: {animation: 'Usuario'} },
  { path: 'paises', component: PaisesComponent },
  { path: 'detalle-pais', component: DetallePaisComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(miRuteo),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
