import { Component, Input } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NominasService } from '../../services/nominas.service';
import { Roles } from '../../interfaces/valores.interfaces';

@Component({
  selector: 'app-nuevo-empleado-page',
  templateUrl: './nuevo-empleado-page.component.html',
  styleUrls: ['./nuevo-empleado-page.component.css']
})
export class NuevoEmpleadoPageComponent {

  public empleadoForm: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3) ]],
    numeroEmpleado: ['', [ Validators.required ]],
    rol: ['', [ Validators.required ]],
    sueldoPorHora: ['', [ Validators.required ]],
  });

  constructor( private fb: FormBuilder, private nominaService: NominasService ) {}

  get roles(): Roles[] {
    return this.nominaService.roles;
  }

  isValidField( field: string ): boolean | null {
    return this.empleadoForm.controls[field].errors
    && this.empleadoForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if( !this.empleadoForm.controls[field]) return null;
    const errors = this.empleadoForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters`
        default:
          break;
      }
    }
    return null;
  }

  onSubmit() {
    // if(this.empleadoForm.invalid) {
    //   this.empleadoForm.markAllAsTouched();
    //   return;
    // }
    console.log(this.empleadoForm.value);
    // this.myForm.reset();
  }
}
