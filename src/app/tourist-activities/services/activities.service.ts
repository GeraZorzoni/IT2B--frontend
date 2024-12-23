import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base de tu backend

  // Signals para almacenar el estado
  actividades = signal<any[]>([]);
  actividadDetalle = signal<any>(null);
  actividadesConProveedores = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Lista todas las actividades (sin descripción larga).
   */

  listarActividades(): void {
    this.http.get<any[]>(`${this.baseUrl}/actividades`).subscribe((data) => {
      this.actividades.set(data);
    });
  }

  /**
   * Obtiene el detalle completo de una actividad por ID.
   * @param id El ID de la actividad.
   */

  obtenerDetalleActividad(id: number): void {
    this.http
      .get<any>(`${this.baseUrl}/actividades/${id}`)
      .subscribe((data) => {
        this.actividadDetalle.set(data);
      });
  }

  /**
   * Busca actividades por coincidencia parcial en el nombre.
   * @param nombre Nombre o parte del nombre de la actividad.
   */

  // comparar con maps a ver que es mas reactivo
  buscarActividades(nombre: string): void {
    this.http
      .get<any[]>(`${this.baseUrl}/actividades/buscar/${nombre}`)
      .subscribe((data) => {
        this.actividades.set(data);
      });
  }

  /**
   * Lista actividades junto con sus proveedores (o null si no tienen).
   */
  listarActividadesConProveedores(): void {
    this.http
      .get<any[]>(`${this.baseUrl}/actividades/detalle-proveedores`)
      .subscribe((data) => {
        this.actividadesConProveedores.set(data);
      });
  }
}
