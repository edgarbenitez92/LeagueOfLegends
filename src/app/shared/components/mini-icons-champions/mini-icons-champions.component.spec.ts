import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MiniIconsChampionsComponent } from './mini-icons-champions.component';
import { mockAmumu } from '../../../views/dashboard/champion-detail/mock/champion-detail.mock';
import { Champion } from '../../interfaces/champions.interface';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class FakeRouter {
  navigate(params: any[]): void {}
}

fdescribe('MiniIconsChampionsComponent', () => {
  let component: MiniIconsChampionsComponent;
  let fixture: ComponentFixture<MiniIconsChampionsComponent>;
  let championCard: Champion;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniIconsChampionsComponent],
      imports: [RouterTestingModule],
      // providers: [
      //   { provide: Router, useClass: FakeRouter }
      // ]
    }).compileComponents();

    fixture = TestBed.createComponent(MiniIconsChampionsComponent);
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
