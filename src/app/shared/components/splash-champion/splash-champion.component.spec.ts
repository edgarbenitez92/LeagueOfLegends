import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashChampionComponent } from './splash-champion.component';

describe('SplashChampionComponent', () => {
  let component: SplashChampionComponent;
  let fixture: ComponentFixture<SplashChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashChampionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
