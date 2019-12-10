import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActaNacimientoPageRoutingModule } from './acta-nacimiento-routing.module';

import { ActaNacimientoPage } from './acta-nacimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActaNacimientoPageRoutingModule
  ],
  declarations: [ActaNacimientoPage]
})
export class ActaNacimientoPageModule {}
