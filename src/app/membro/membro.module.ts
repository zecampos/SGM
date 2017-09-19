import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembroRoutingModule } from './membro-routing.module';
import { MembrolistComponent } from './membrolist/membrolist.component';
import { MembronewComponent } from './membronew/membronew.component';
import { MembrodetailComponent } from './membrodetail/membrodetail.component';
import { MembroeditComponent } from './membroedit/membroedit.component';

@NgModule({
  imports: [
    CommonModule,
    MembroRoutingModule,
    FormsModule
  ],
  declarations: [MembrolistComponent, MembronewComponent, MembrodetailComponent, MembroeditComponent]
})
export class MembroModule { }
