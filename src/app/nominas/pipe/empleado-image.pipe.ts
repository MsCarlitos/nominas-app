import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../interfaces/nomina.interface';

@Pipe({
  name: 'empleadoImage'
})
export class EmpleadoImagePipe implements PipeTransform {

  transform(empleado: Empleado): string {
    if(empleado) {
      return 'assets/no-image.png';
    }
    return 'no-image';
  }

}
