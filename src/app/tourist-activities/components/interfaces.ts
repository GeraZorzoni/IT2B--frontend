export interface Actividad {
  id: number;
  nombre: string;
  descripcion_corta: string;
  descripcion_larga?: string;
  precio: number;
  tiene_proveedor?: boolean;
  proveedor: Proveedor | null;
}

export interface Proveedor {
  id: number;
  nombre: string;
}
