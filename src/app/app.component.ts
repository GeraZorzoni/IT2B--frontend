import { Component } from '@angular/core';

import { TouristActivitiesModule } from './tourist-activities/tourist-activities.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TouristActivitiesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'IT2B-frontend';
}
