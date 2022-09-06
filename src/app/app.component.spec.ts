import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { translateModuleConfig } from './core/configs/translate-module.config';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';
import { AboutComponent } from './views/dashboard/about/about.component';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'dashboard/about', component: AboutComponent }
      ]), HttpClientModule, TranslateModule.forRoot(translateModuleConfig)],
      providers: [AppSettingsService, TranslateService]
    }).compileComponents();
  });

  it('it should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`it should have a title 'League of Legends'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('League of Legends');
  });

  it('it should have a router-oulet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });
});
