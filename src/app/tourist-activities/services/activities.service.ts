import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Actividad } from '../components/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private baseUrl = 'http://127.0.0.1:8000';

  // Signals para almacenar el estado
  public actividades = signal<Actividad[]>([]);
  public actividadDetalle = signal<Actividad | null>(null);
  public actividadesConProveedores = signal<any[]>([]);
  public isLoading = signal(false);
  public error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  listarActividades(): void {
    this.http.get<any[]>(`${this.baseUrl}/actividades`).subscribe((data) => {
      this.actividades.set(data);
    });
  }

  buscarActividades(query: string): void {
    if (query.length === 0) {
      this.actividades.set([]);
      this.isLoading.set(false);
      this.error.set(null);
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.http
      .get<Actividad[]>(`${this.baseUrl}/actividades/buscar/${query}`)
      .subscribe(
        (data) => {
          this.isLoading.set(false);

          if (data.length === 0) {
            this.error.set('No se encontraron actividades con ese nombre.');
          } else {
            this.error.set(null);
          }

          this.actividades.set(data);
        },
        (error) => {
          this.isLoading.set(false);
          if (error.status === 404) {
            this.error.set('No se encontraron actividades con ese nombre.');
          } else {
            this.error.set('Ocurrió un error al buscar actividades.');
          }
        }
      );
  }

  obtenerDetalleActividad(id: number): void {
    this.http
      .get<any>(`${this.baseUrl}/actividades/${id}`)
      .subscribe((data) => {
        this.actividadDetalle.set(data);
      });
  }

  listarActividadesConProveedores(): void {
    this.http
      .get<Actividad[]>(`${this.baseUrl}/actividades/detalle-proveedores`)
      .subscribe((data) => {
        this.actividadesConProveedores.set(data);
      });
  }

  deleteActivities() {
    this.actividades.set([]);
  }
}
