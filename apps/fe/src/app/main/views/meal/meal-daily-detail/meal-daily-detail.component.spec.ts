import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDailyDetailComponent } from './meal-daily-detail.component';

describe('MealDailyDetailComponent', () => {
  let component: MealDailyDetailComponent;
  let fixture: ComponentFixture<MealDailyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealDailyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDailyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
