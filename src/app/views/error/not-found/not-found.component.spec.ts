import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

fdescribe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [HttpClientModule, TranslateModule.forRoot(translateModuleConfig)],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create component', () => {
    expect(component).toBeTruthy();
  });

  it('it should exist a routerLink to home', () => {
    const debugElement = fixture.debugElement.query(By.css('a'));
    expect(debugElement.attributes['routerLink']).toBeTruthy();
  });
});
