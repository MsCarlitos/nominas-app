import { Injectable } from '@angular/core';
import { Meses, Roles } from '../interfaces/valores.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private _roles: Roles[] = [
    Roles.auxiliares, Roles.cargadores, Roles.choferes,
  ];

  private _meses: Meses[] = [
    Meses.enero, Meses.febrero, Meses.marzo, Meses.abril, Meses.mayo, Meses.junio, Meses.julio,
    Meses.agosto, Meses.septiembre, Meses.octubre, Meses.noviembre, Meses.diciembre,
  ]

  get roles(): Roles[] {
    return [...this._roles];
  }

  get meses(): Meses[] {
    return [...this._meses];
  }
}
