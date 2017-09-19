import { UsuarionewComponent } from './usuarionew/usuarionew.component';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: UsuariolistComponent},
  { path: 'novo', component: UsuarionewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
