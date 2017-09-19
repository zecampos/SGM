import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { UsuarionewComponent } from './usuarionew/usuarionew.component';
import { UsuariodetailComponent } from './usuariodetail/usuariodetail.component';
import { UsuarioeditComponent } from './usuarioedit/usuarioedit.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuariolistComponent, UsuarionewComponent, UsuariodetailComponent, UsuarioeditComponent]
})
export class UsuarioModule { }
