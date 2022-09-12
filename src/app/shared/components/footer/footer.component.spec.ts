import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from '../../../core/configs/translate-module.config';

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientModule, TranslateModule.forRoot(translateModuleConfig)],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('it should init the ngOnInit', () => {
    const spy = spyOn(component, 'getCurrentYear');
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('it should have the current year', () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.currentYear).toEqual(currentYear);
  });
});
