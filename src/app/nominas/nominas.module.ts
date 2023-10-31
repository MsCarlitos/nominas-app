import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominasRoutingModule } from './nominas-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NuevoEmpleadoPageComponent } from './pages/nuevo-empleado-page/nuevo-empleado-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovimientosPorMesPageComponent } from './pages/movimientos-por-mes-page/movimientos-por-mes-page.component';
import { ListadoPageComponent } from './pages/listado-page/listado-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { EmpleadoImagePipe } from './pipe/empleado-image.pipe';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    NuevoEmpleadoPageComponent,
    MovimientosPorMesPageComponent,
    ListadoPageComponent,
    DetailsPageComponent,
    EmpleadoImagePipe
  ],
  imports: [
    CommonModule,
    NominasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class NominasModule { }
