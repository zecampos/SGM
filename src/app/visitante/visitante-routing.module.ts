import { VisitantenewComponent } from './visitantenew/visitantenew.component';
import { VisitantelistComponent } from './visitantelist/visitantelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: VisitantelistComponent},
  {path: 'novo', component: VisitantenewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
