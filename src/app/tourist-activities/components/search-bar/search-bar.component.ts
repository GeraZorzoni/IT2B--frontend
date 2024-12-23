import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  //private debounceTimer?: NodeJS.Timeout; ver time out
  private debounceTimer?: ReturnType<typeof setTimeout>;

  //constructor(private placesService: PlacesService) {}

  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    // this.debounceTimer = setTimeout(() => {
    //   this.placesService.getPlacesByQuery(query);
    // }, 350);
  }
}
