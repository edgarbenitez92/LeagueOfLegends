import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconsChampionsComponent } from './mini-icons-champions.component';

describe('MiniIconsChampionsComponent', () => {
  let component: MiniIconsChampionsComponent;
  let fixture: ComponentFixture<MiniIconsChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconsChampionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniIconsChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
