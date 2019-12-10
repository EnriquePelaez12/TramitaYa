import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CURPPageRoutingModule } from './curp-routing.module';

import { CURPPage } from './curp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CURPPageRoutingModule
  ],
  declarations: [CURPPage]
})
export class CURPPageModule {}
