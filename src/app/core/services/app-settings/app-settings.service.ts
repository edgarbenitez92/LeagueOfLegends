import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/shared/interfaces/app-settings.interface';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

const defaultAppSettings: AppSettings = {
  language: navigator.language.substring(0, 2),
  api_language: 'en_US',
};

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appSettings: AppSettings = defaultAppSettings;
  private hasNewLanguageSource: Subject<boolean> = new Subject();
  public hasNewLanguage$: Observable<boolean> = this.hasNewLanguageSource.asObservable();

  constructor(private translateService: TranslateService) {}

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

    if (language == 'en') this.appSettings.api_language = 'en_US';
    if (language == 'es') this.appSettings.api_language = 'es_ES';

    this.hasNewLanguageSource.next(true);
  }

  private storeAppSettings() {
    localStorage.setItem(
      environment.localStorageKeys.appSettings,
      JSON.stringify(this.appSettings)
    );
  }
}
