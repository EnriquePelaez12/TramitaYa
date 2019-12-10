import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CFEPageRoutingModule } from './cfe-routing.module';

import { CFEPage } from './cfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CFEPageRoutingModule
  ],
  declarations: [CFEPage]
})
export class CFEPageModule {}
