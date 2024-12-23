import { Component } from '@angular/core';

import { LoadingComponent } from '../../components/loading/loading.component';
import { ResultsViewComponent } from '../../components/results-view/results-view.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [LoadingComponent, ResultsViewComponent, SearchBarComponent],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css',
})
export class ScreenComponent {}
