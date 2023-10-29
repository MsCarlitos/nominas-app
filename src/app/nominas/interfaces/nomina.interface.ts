import { Roles } from "./valores.interfaces";

export interface Nomina {
  numeroEmpleado: number;
  mes: number;
  bonoPorHora: number;
  entregas: number;
  retencionISR: number;
  retencionAdicional: number;
  valeDeDespensa: number;
}

export interface Empleado {
  nombre: string;
  numeroEmpleado: number;
  rol: Roles
  sueldoPorHora: number;
  nomina: Nomina[];
}
