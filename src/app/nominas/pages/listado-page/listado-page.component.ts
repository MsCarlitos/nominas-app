import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../../interfaces/nomina.interface';
import { NominasService } from '../../services/nominas.service';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css']
})
export class ListadoPageComponent implements OnInit {
  public empleado: Empleado[] = [];
  displayedColumns: string[] = ['nombre', 'numeroEmpleado', 'rol', 'sueldoPorHora', 'actions'];
  public dataSource: any;

  constructor (private nominaService: NominasService) {}

  ngOnInit(): void {
    this.nominaService.getEmpleados().subscribe(empleados => {
      this.empleado = empleados
      this.dataSource = new MatTableDataSource(this.empleado);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
