import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/shared/interfaces/app-settings.interface';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

const defaultAppSettings: AppSettings = {
  // darkMode: false,
  language: navigator.language.substring(0, 2),
};

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  appSettings: AppSettings = defaultAppSettings;

  constructor(private translateService: TranslateService) { }

  init() {
    const appSettings = localStorage.getItem(environment.localStorageKeys.appSettings);
    this.appSettings = appSettings ? JSON.parse(appSettings) : defaultAppSettings;
    this.setLanguage(this.appSettings.language);
  }

  getAppSettings() {
    return this.appSettings;
  }

  toggleLanguage(language: string) {
    this.setLanguage(language);
    this.storeAppSettings();
  }

  private setLanguage(language: string = defaultAppSettings.language): void {
    this.translateService.use(language);
    this.appSettings.language = language;
  }

  private storeAppSettings() {
    localStorage.setItem(
      environment.localStorageKeys.appSettings,
      JSON.stringify(this.appSettings)
    );
  }
}

