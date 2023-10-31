import { Roles } from "./valores.interfaces";

export interface Empleado {
  nombre: string;
  numeroEmpleado: number;
  rol: Roles
  sueldoPorHora: number;
  nomina: Nomina[];
}

export interface Nomina {
  numeroEmpleado?: number;
  mes?: string;
  bonoPorHora?: number;
  entregas?: number;
  retencionISR?: number;
  retencionAdicional?: number;
  sueldoNeto?: number;
  valeDeDespensa?: number;
  sueldoTotal?: number;
  horasTrabajadas?: number;
}
