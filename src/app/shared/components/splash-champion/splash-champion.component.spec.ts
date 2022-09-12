import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { mockAmumu } from 'src/app/views/dashboard/champion-detail/mock/champion-detail.mock';
import { Champion } from '../../interfaces/champions.interface';
import { SplashChampionComponent } from './splash-champion.component';

fdescribe('SplashChampionComponent', () => {
  let component: SplashChampionComponent;
  let fixture: ComponentFixture<SplashChampionComponent>;
  let championCard: Champion;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplashChampionComponent],
      imports: [RouterTestingModule],
      // providers: [
      //   { provide: Router, useClass: FakeRouter }
      // ]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashChampionComponent);
    component = fixture.componentInstance;

    championCard = mockAmumu;
    component.champion = championCard;
    fixture.detectChanges();
  });

  it('it should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('it should show the champion name', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const championNameLabel: HTMLElement = debugElement.query(By.css('h5')).nativeElement;
    expect(championNameLabel.innerHTML).toContain('Amumu');
  });

  it('it should contain the route dashboard/champion/Amumu', () => {
    const router: Router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.goToChampionDetails(component.champion.id);
    expect(spy).toHaveBeenCalledWith(['dashboard/champion/Amumu']);
  });
});
