import { Roles } from "../interfaces/valores.interfaces";
import { Nomina } from "./nomina.model";

export class Empleado {

  constructor() {
    this.nomina = [new Nomina()]
  }
  nombre: string = "";
  numeroEmpleado: number = 0;
  rol!: Roles;
  sueldoPorHora: number = 0;
  nomina: Nomina[];
}
