import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsListComponent } from './champions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppSettingsService } from '../../../core/services/app-settings/app-settings.service';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { of } from 'rxjs';
import { championData } from './mock/champion-data';
import { SnackBarService } from '../../../core/services/snack-bar/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ChampionsListComponent', () => {
  let component: ChampionsListComponent;
  let fixture: ComponentFixture<ChampionsListComponent>;
  let toggleEvent: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChampionsListComponent],
      imports: [HttpClientModule, TranslateModule.forRoot(translateModuleConfig), MatSnackBarModule],
      providers: [AppSettingsService, ChampionsService, TranslateService, SnackBarService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create component', () => {
    expect(component).toBeTruthy();
  });

  it('it should get champions', () => {
    const championsService = TestBed.inject(ChampionsService);

    spyOn(championsService, 'getChampions').and.callFake(() => {
      return of(championData);
    });

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.champions.length).toBeGreaterThan(0);
  });

  it('it should change to mini-champions view', () => {
    toggleEvent = true;
    component.onSelectTypeView(toggleEvent);
    fixture.detectChanges();

    expect(component.isInitView).toBeTrue();
  });

  it('it should change to splash-champions view', () => {
    toggleEvent = false;
    component.onSelectTypeView(toggleEvent);
    fixture.detectChanges();

    expect(component.isInitView).toBeFalse();
  });

});
