import { HttpClientModule } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppSettings } from '../../../shared/interfaces/app-settings.interface';
import { mockSettings } from './mock/lang-settings.mock';

fdescribe('AppSettingsService', () => {
  let appSettingsService: AppSettingsService;
  let translateService: TranslateService;

  beforeEach(async () => {
    appSettingsService = new AppSettingsService(translateService);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('it should be created', () => {
    expect(appSettingsService).toBeTruthy();
  });

  it('It should call the init function', () => {
    const spy = spyOn(appSettingsService, 'init');
    appSettingsService.init();
    expect(spy).toHaveBeenCalled();
  });

  it('It should to be same appSettings', () => {
    spyOn(appSettingsService, 'init');
    appSettingsService.init();
    expect(mockSettings).toEqual(appSettingsService.appSettings);
  });

  it('It should call the getAppSettings function', () => {
    const spy = spyOn(appSettingsService, 'getAppSettings');
    appSettingsService.getAppSettings();
    expect(spy).toHaveBeenCalled();
  });

  it('It should call the toggleLanguage function', () => {
    const spy = spyOn(appSettingsService, 'toggleLanguage');
    appSettingsService.toggleLanguage('en');
    expect(spy).toHaveBeenCalled();
  });
});
