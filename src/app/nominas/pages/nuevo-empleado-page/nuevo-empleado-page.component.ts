import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/nomina.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../services/roles.service';
import { Roles } from '../../interfaces/valores.interfaces';
import { NominasService } from '../../services/nominas.service';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-nuevo-empleado-page',
  templateUrl: './nuevo-empleado-page.component.html',
  styleUrls: ['./nuevo-empleado-page.component.css']
})
export class NuevoEmpleadoPageComponent {
  public searchInput = new FormControl('');
  public empleados: Empleado[] = [];
  public selectEmpleado?: Empleado;

  public empleadoForm: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3) ]],
    rol: ['', [ Validators.required ]],
  });

  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private nominasService: NominasService,
    private router: Router,
  ) {}

  get roles(): Roles[] {
    return this.rolesService.roles;
  }

  get currentEmpleado(): Empleado {
    const empleado = this.empleadoForm.value as Empleado;
    return empleado;
  }

  onSubmit() {
    this.nominasService.addEmpleado(this.currentEmpleado)
      .subscribe(empleado => {
        this.router.navigate(['/nominas/empleado', empleado.numeroEmpleado]);
      })
    this.empleadoForm.reset();
  }
}
