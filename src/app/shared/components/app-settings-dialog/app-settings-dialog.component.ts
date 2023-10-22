import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacySelectChange as MatSelectChange, MatLegacySelectModule } from '@angular/material/legacy-select';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AppSettingsService } from 'src/app/core/services/app-settings/app-settings.service';
import { SnackBarService } from '../../../core/services/snack-bar/snack-bar.service';
import { SnackBarStatesEnum } from '../../enums/snack-bar-states.enum';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyOptionModule } from '@angular/material/legacy-core';
import { NgFor } from '@angular/common';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-app-settings-dialog',
    templateUrl: './app-settings-dialog.component.html',
    styleUrls: ['./app-settings-dialog.component.scss'],
    standalone: true,
    imports: [
        MatLegacyDialogModule,
        MatLegacyFormFieldModule,
        MatLegacySelectModule,
        NgFor,
        MatLegacyOptionModule,
        MatDividerModule,
        TranslateModule,
    ],
})
export class AppSettingsDialogComponent implements OnInit {
  languageControl: UntypedFormControl;

  languages = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];

  isChampionDetailsView: boolean = false;

  constructor(
    private appSettingsService: AppSettingsService,
    private snackBarService: SnackBarService,
    private translateService: TranslateService
  ) {
    const { language } = this.appSettingsService.getAppSettings();
    this.languageControl = new UntypedFormControl(language);
  }

  ngOnInit(): void {}

  setLanguage({ value }: MatSelectChange) {
    if (this.languageControl.value == value) {
      this.snackBarService.open(
        SnackBarStatesEnum.DANGER,
        this.translateService.instant('WRONG_LANGUAGE_SELECTED')
      );
      return;
    }
    this.appSettingsService.toggleLanguage(value);
  }
}
