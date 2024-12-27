import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-results-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-view.component.html',
  styleUrl: './results-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsViewComponent {
  private activitiesService = inject(ActivitiesService);

  get selectedActivity() {
    return this.activitiesService.actividadDetalle();
  }
}
