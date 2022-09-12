import { HttpClientModule } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { TestBed } from "@angular/core/testing";
import { TranslateService } from '@ngx-translate/core';

fdescribe('AppSettingsService', () => {
  let appSettingsService: AppSettingsService;
  let translateService: TranslateService;

  beforeEach(async () => {
    appSettingsService = new AppSettingsService(translateService);
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('it should be created', () => {
    expect(appSettingsService).toBeTruthy();
  });

});