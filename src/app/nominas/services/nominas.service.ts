import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Empleado, Nomina } from '../interfaces/nomina.interface';

@Injectable({ providedIn: 'root' })
export class NominasService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    const empleado = this.http.get<Empleado[]>(`${this.baseUrl}/empleados`);
    return empleado;
  }

  getEmpleadoById(numeroEmpleado: number): Observable<Empleado | undefined> {
    const empleado = this.http.get<Empleado>(`${this.baseUrl}/empleados/${ numeroEmpleado }`)
      .pipe(catchError(error => of(undefined)));
    return empleado;
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.baseUrl}/empleados`, empleado);
  }

  getSuggestions(query: string): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}/empleados?q=${query}&limit=4`)
  }

  addNomina(nomina: Nomina): Observable<Nomina> {
    const nominaDto = {
      "numeroEmpleado": nomina.numeroEmpleado,
      "mes": nomina.mes,
      "entregas": nomina.entregas
    }
    return this.http.post<Nomina>(`${this.baseUrl}/nominas`, nominaDto);
  }
}
