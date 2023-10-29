import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NominasService } from '../../services/nominas.service';

@Component({
  selector: 'app-movimientos-por-mes-page',
  templateUrl: './movimientos-por-mes-page.component.html',
  styleUrls: ['./movimientos-por-mes-page.component.css']
})
export class MovimientosPorMesPageComponent {

  public empleadoForm: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3) ]],
    numeroEmpleado: ['', [ Validators.required ]],
    rol: ['', [ Validators.required ]],
    mes: ['', [Validators.required]],
    entregas: ['', [Validators.required]],
    sueldoPorHora: ['', [ Validators.required ]],
  });

  constructor( private fb: FormBuilder, private nominaService: NominasService ) {}

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
