import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponent } from './snack-bar.component';
import { MatLegacySnackBarRef as MatSnackBarRef, MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { SnackBarData } from '../../interfaces/app-snack-bar-data.interface';

fdescribe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;
  let snackRef: MatSnackBarRef<SnackBarComponent>;
  let dataSnack: SnackBarData;

  beforeEach(async () => {
    component = new SnackBarComponent(snackRef, dataSnack);
    await TestBed.configureTestingModule({
      declarations: [SnackBarComponent],
      imports: [MatSnackBarModule, MatSnackBarRef],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
