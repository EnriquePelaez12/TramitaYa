import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CURPPage } from './curp.page';

const routes: Routes = [
  {
    path: '',
    component: CURPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CURPPageRoutingModule {}
