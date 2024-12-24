import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base de tu backend

  // Signals para almacenar el estado
  private actividades = signal<any[]>([]);
  private actividadDetalle = signal<any>(null);
  private actividadesConProveedores = signal<any[]>([]);
  public isLoading: boolean = false;

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

  buscarActividades(query: string): void {
    if (query.length === 0) {
      this.actividades.set([]);
      this.isLoading = false;
      return;
    }

    if (!this.actividades()) throw Error('No Hay actividades con ese nombre');

    this.http
      .get<any[]>(`${this.baseUrl}/actividades/buscar/${query}`)
      .subscribe((data) => {
        this.actividades.set(data);
      });

    console.log(this.actividades());
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
