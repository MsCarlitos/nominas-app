import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nominas',
    loadChildren: () => import('./nominas/nominas.module').then( m => m.NominasModule ),
  },
  {
    path: '**',
    redirectTo: 'nominas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
