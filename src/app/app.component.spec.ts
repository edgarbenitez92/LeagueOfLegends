import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { translateModuleConfig } from './core/configs/translate-module.config';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [NgxSpinnerComponent],
    imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        TranslateModule.forRoot(translateModuleConfig),
        AppComponent,
    ],
    providers: [AppSettingsService, TranslateService],
    schemas: [NO_ERRORS_SCHEMA],
}).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`it should have a title 'League of Legends'`, () => {
    expect(fixture.componentInstance.title).toEqual('League of Legends');
  });

  it('it should have a router-oulet', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });

  it('it should init the appSettingsService', () => {
    const spy = spyOn(component, 'initSettingsService');
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
