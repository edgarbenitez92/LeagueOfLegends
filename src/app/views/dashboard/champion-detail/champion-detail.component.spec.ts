import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { ChampionDetailComponent } from './champion-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { mockAmumu } from './mock/champion-detail.mock';
import { By } from '@angular/platform-browser';

class FakeRouter {
  navigate(params: Params) {}
}

class FakeActivatedRoute {
  params: Observable<any> = from([{ id: 'Aatrox' }]);

  // private subject = new Subject<string>();

  // push(value: string) {
  //   this.subject.next(value);
  // }

  // get params() {
  //   return this.subject.asObservable();
  // }
}

fdescribe('ChampionDetailComponent', () => {
  let component: ChampionDetailComponent;
  let fixture: ComponentFixture<ChampionDetailComponent>;
  let championService: ChampionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChampionDetailComponent],
      imports: [HttpClientModule, TranslateModule.forRoot(translateModuleConfig)],
      providers: [
        ChampionsService,
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create component', () => {
    expect(component).toBeTruthy();
  });

  it('It should navigate to home screen', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.goHome();
    expect(spy).toHaveBeenCalledWith(['/dashboard/home']);
  });

  it('It should get the activated route with the current champion', () => {
    const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    expect(component.id).toBe('Aatrox');
  });
});
