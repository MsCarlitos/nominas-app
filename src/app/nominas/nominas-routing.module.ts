import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NuevoEmpleadoPageComponent } from './pages/nuevo-empleado-page/nuevo-empleado-page.component';
import { MovimientosPorMesPageComponent } from './pages/movimientos-por-mes-page/movimientos-por-mes-page.component';
import { ListadoPageComponent } from './pages/listado-page/listado-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'nuevo-empleado', component: NuevoEmpleadoPageComponent },
      { path: 'movimientos', component: MovimientosPorMesPageComponent },
      { path: 'listado', component: ListadoPageComponent },
      { path: 'empleado/:id', component: DetailsPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominasRoutingModule { }
