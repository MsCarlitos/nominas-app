import { Injectable } from '@angular/core';
import { Roles } from '../interfaces/valores.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NominasService {
  private _roles: Roles[] = [
    Roles.auxiliares, Roles.cargadores, Roles.choferes,
  ]

  get roles(): Roles[] {
    return [...this._roles];
  }
}
