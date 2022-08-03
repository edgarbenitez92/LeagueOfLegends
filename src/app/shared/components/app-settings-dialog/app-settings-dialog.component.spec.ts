import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsDialogComponent } from './app-settings-dialog.component';

describe('AppSettingsDialogComponent', () => {
  let component: AppSettingsDialogComponent;
  let fixture: ComponentFixture<AppSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSettingsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
