import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'membro', loadChildren: 'app/membro/membro.module#MembroModule'},
  {path: 'visitante', loadChildren: 'app/visitante/visitante.module#VisitanteModule'},
  {path: 'usuario', loadChildren: 'app/usuario/usuario.module#UsuarioModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
