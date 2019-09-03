import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component'
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component'
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AbmUsuarioComponent } from './componentes/abm-usuario/abm-usuario.component';
import { MaestroDetalleComponent } from './componentes/maestro-detalle/maestro-detalle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'abm-usuario', component: AbmUsuarioComponent },
  { path: 'maestro-detalle', component: MaestroDetalleComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }