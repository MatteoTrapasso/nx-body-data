import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatDailyDetailComponent } from './eat-daily-detail.component';

describe('EatDailyDetailComponent', () => {
  let component: EatDailyDetailComponent;
  let fixture: ComponentFixture<EatDailyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatDailyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatDailyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
