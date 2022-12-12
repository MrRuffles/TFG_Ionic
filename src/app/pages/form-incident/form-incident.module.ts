import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormIncidentPageRoutingModule } from './form-incident-routing.module';

import { FormIncidentPage } from './form-incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormIncidentPageRoutingModule
  ],
  declarations: [FormIncidentPage]
})
export class FormIncidentPageModule {}
