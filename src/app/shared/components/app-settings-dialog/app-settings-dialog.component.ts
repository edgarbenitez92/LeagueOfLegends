import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AppSettingsService } from 'src/app/core/services/app-settings/app-settings.service';

@Component({
  selector: 'app-app-settings-dialog',
  templateUrl: './app-settings-dialog.component.html',
  styleUrls: ['./app-settings-dialog.component.scss'],
})
export class AppSettingsDialogComponent implements OnInit {
  languageControl: FormControl;

  languages = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];

  isChampionDetailsView: boolean = false;

  constructor(private appSettingsService: AppSettingsService, private route: Router) {
    const { language } = this.appSettingsService.getAppSettings();
    this.languageControl = new FormControl(language);
  }

  ngOnInit(): void { }

  setLanguage({ value }: MatSelectChange) {
    this.appSettingsService.toggleLanguage(value);

    // Reload the champion details view
    const { url } = this.route;
    if (url.includes('champion')) window.location.reload();
  }
}
