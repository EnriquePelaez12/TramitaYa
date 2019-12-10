import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./componentes/correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'cfe',
    loadChildren: () => import('./componentes/cfe/cfe.module').then( m => m.CFEPageModule)
  },
  {
    path: 'curp',
    loadChildren: () => import('./componentes/curp/curp.module').then( m => m.CURPPageModule)
  },
  {
    path: 'acta-nacimiento',
    loadChildren: () => import('./componentes/acta-nacimiento/acta-nacimiento.module').then( m => m.ActaNacimientoPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./componentes/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
