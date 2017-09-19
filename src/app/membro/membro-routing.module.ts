import { MembroeditComponent } from './membroedit/membroedit.component';
import { MembronewComponent } from './membronew/membronew.component';
import { MembrolistComponent } from './membrolist/membrolist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MembrolistComponent},
  {path: 'novo', component: MembronewComponent},
  {path: 'membro-edit/:id', component: MembroeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembroRoutingModule { }
