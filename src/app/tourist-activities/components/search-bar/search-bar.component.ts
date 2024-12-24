import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

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
  public isLoading: boolean = false;
  public activitiesService = inject(ActivitiesService);

  //private debounceTimer?: NodeJS.Timeout; ver time out
  private debounceTimer?: ReturnType<typeof setTimeout>;

  //constructor(private placesService: PlacesService) {}

  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.isLoading = true;

    this.debounceTimer = setTimeout(() => {
      this.activitiesService.buscarActividades(query);
    }, 350);
  }
}
