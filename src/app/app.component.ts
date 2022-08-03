import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.init();
  }
}
