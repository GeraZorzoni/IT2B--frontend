import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-results-view',
  standalone: true,
  imports: [],
  templateUrl: './results-view.component.html',
  styleUrl: './results-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsViewComponent {}
