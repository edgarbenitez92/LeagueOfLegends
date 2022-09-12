import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'League of Legends';

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.initSettingsService();
  }

  initSettingsService() {
    this.appSettingsService.init();
  }
}
