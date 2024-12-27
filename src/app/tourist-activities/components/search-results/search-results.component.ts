import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesService } from '../../services/activities.service';
import { Actividad } from '../interfaces';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  public activitiesService = inject(ActivitiesService);
  public selectedId: number = 0;

  get isLoading() {
    return this.activitiesService.isLoading();
  }

  get activities(): Actividad[] {
    return this.activitiesService.actividades();
  }

  goToActivityDetail(id: number) {
    this.activitiesService.deleteActivities();

    this.activitiesService.obtenerDetalleActividad(id);
  }
}
