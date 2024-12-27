import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsViewComponent } from '../../components/results-view/results-view.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule, ResultsViewComponent, SearchBarComponent],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css',
})
export class ScreenComponent {}
