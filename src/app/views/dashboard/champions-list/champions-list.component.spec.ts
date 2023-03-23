import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsListComponent } from './champions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppSettingsService } from '../../../core/services/app-settings/app-settings.service';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { championData } from './mock/champion-data';
import { SnackBarService } from '../../../core/services/snack-bar/snack-bar.service';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarStatesEnum } from 'src/app/shared/enums/snack-bar-states.enum';
import { By } from '@angular/platform-browser';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MiniIconsChampionsComponent } from '../../../shared/components/mini-icons-champions/mini-icons-champions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

fdescribe('ChampionsListComponent', () => {
  let component: ChampionsListComponent;
  let fixture: ComponentFixture<ChampionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionsListComponent, FooterComponent, MiniIconsChampionsComponent],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot(translateModuleConfig),
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatTooltipModule,
        RouterTestingModule,
      ],
      providers: [AppSettingsService, ChampionsService, TranslateService, SnackBarService],
    });

    fixture = TestBed.createComponent(ChampionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create component', () => {
    expect(component).toBeTruthy();
  });

  it('it should call service function to get champions', () => {
    const championsService = TestBed.inject(ChampionsService);

    const spyService = spyOn(championsService, 'getChampions').and.callFake(() => {
      return of([]);
    });

    component.getChampions();
    expect(spyService).toHaveBeenCalled();
  });

  it('it should get champions', () => {
    const championsService = TestBed.inject(ChampionsService);

    // spyOn(championsService, 'getChampions').and.callFake(() => {
    //   return of(championData);
    // });
    spyOn(championsService, 'getChampions').and.returnValue(of(championData));

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.champions.length).toBeGreaterThan(0);
  });

  // it('it should show a error msg when the call service throw error', () => {

  //   const championsService = TestBed.inject(ChampionsService);
  //   let snackBar: SnackBarService;

  //   spyOn(championsService, 'getChampions').and.returnValue(throwError(() => {
  //     snackBar.open(
  //       SnackBarStatesEnum.DANGER,
  //       'Error to get champions from the data server'
  //     )
  //   }));

  //   component.getChampions();
  //   expect(component.getChampions).toThrowError();
  // });

  it('it should change to splash-champions view', () => {
    component.onSelectTypeView(false);
    fixture.detectChanges();
    expect(component.isInitView).toBeFalse();
  });

  it('it should change to mini-champions view', () => {
    component.onSelectTypeView(true);
    fixture.detectChanges();
    expect(component.isInitView).toBeTrue();
  });
});
