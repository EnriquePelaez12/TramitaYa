import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActaNacimientoPage } from './acta-nacimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ActaNacimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActaNacimientoPageRoutingModule {}
