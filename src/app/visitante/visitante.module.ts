import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { VisitantelistComponent } from './visitantelist/visitantelist.component';
import { VisitantenewComponent } from './visitantenew/visitantenew.component';
import { VisitantedetailComponent } from './visitantedetail/visitantedetail.component';
import { VisitanteeditComponent } from './visitanteedit/visitanteedit.component';

@NgModule({
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ],
  declarations: [VisitantelistComponent, VisitantenewComponent, VisitantedetailComponent, VisitanteeditComponent]
})
export class VisitanteModule { }
