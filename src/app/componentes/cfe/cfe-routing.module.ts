import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CFEPage } from './cfe.page';

const routes: Routes = [
  {
    path: '',
    component: CFEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CFEPageRoutingModule {}
