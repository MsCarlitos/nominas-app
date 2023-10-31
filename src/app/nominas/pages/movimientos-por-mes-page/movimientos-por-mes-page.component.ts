import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../services/roles.service';
import { Meses } from '../../interfaces/valores.interfaces';
import { NominasService } from '../../services/nominas.service';
import { Empleado } from '../../interfaces/nomina.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimientos-por-mes-page',
  templateUrl: './movimientos-por-mes-page.component.html',
  styleUrls: ['./movimientos-por-mes-page.component.css']
})
export class MovimientosPorMesPageComponent {
  public searchInput = new FormControl('');
  public empleados: Empleado[] = [];
  public selectEmpleado?: Empleado;

  public empleadoForm: FormGroup = this.fb.group({
    numeroEmpleado: ['', [ Validators.required ]],
    rol: ['', [ Validators.required ]],
    mes: ['', [Validators.required]],
    entregas: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private nominasService: NominasService,
    private router: Router,
  ) {}

  get meses(): Meses[] {
    return this.rolesService.meses;
  }

  searchEmpleado() {
    const value: string = this.searchInput.value || '';
    this.nominasService.getSuggestions(value)
      .subscribe( empleado => {
        this.empleados = empleado;
      });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value){
      this.selectEmpleado = undefined;
      return;
    }
    const empleado: Empleado = event.option.value;
    this.searchInput.setValue(empleado.nombre);
    this.selectEmpleado = empleado;
    this.empleadoForm.setValue({
      numeroEmpleado: empleado.numeroEmpleado,
      rol: empleado.rol,
      mes: '',
      entregas: '',
    });
  }

  onSubmit() {
    this.nominasService.addNomina(this.empleadoForm.value)
      .subscribe(nomina => {
        this.router.navigate(['/nominas/empleado', nomina.numeroEmpleado]);
      })
    this.empleadoForm.reset();
  }
}
