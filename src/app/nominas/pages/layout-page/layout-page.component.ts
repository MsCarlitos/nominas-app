import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Pagina Principal',  icon: 'home', url:'./home'},
    { label: 'Listado',  icon: 'list', url:'./listado'},
    { label: 'Nuevo Empleado',  icon: 'person', url:'./nuevo-empleado'},
    { label: 'Movimientos',  icon: 'add', url:'./movimientos'},
  ];
}
