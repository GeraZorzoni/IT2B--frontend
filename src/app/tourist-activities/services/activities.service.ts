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
      return;
    }

    this.isLoading.set(true);

    this.http
      .get<Actividad[]>(`${this.baseUrl}/actividades/buscar/${query}`)
      .subscribe((data) => {
        this.isLoading.set(false);
        this.actividades.set(data);
        console.log(this.actividades());
      });
  }

  obtenerDetalleActividad(id: number): void {
    this.http
      .get<any>(`${this.baseUrl}/actividades/${id}`)
      .subscribe((data) => {
        this.actividadDetalle.set(data);
        console.log(this.actividadDetalle());
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
