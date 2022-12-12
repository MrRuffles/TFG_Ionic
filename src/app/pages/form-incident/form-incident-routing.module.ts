import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormIncidentPage } from './form-incident.page';

const routes: Routes = [
  {
    path: '',
    component: FormIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormIncidentPageRoutingModule {}
