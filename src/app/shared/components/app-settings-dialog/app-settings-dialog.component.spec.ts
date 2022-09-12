import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppSettingsDialogComponent } from './app-settings-dialog.component';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

fdescribe('AppSettingsDialogComponent', () => {
  let component: AppSettingsDialogComponent;
  let fixture: ComponentFixture<AppSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSettingsDialogComponent],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot(translateModuleConfig),
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('it should create the component', () => {
    expect(component).toBeTruthy();
  });
});
