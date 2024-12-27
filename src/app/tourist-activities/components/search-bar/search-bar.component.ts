import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SearchResultsComponent } from '../search-results/search-results.component';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  public activitiesService = inject(ActivitiesService);

  private debounceTimer?: ReturnType<typeof setTimeout>;

  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.activitiesService.buscarActividades(query);
    }, 250);
  }
}
