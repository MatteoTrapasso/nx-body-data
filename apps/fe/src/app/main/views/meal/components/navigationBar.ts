import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";
import {Meal} from "@models/vo/meal";
import * as dayjs from 'dayjs'
import {getBaseDate} from "@core/utils/date-utils";
import {MealStoreSelectors} from "@root-store/meal-store/index";
import {RouterStoreActions} from "@root-store/router-store/index";
import {RootStoreState} from "@root-store/index";

@Component({
  selector: 'app-navigationBar',
  template: `
    <div class="p-d-flex p-p-3 card" *ngLet="mealDaily$|async as daily">
      <button pButton pRipple type="button" icon="pi pi-arrow-left" class="p-button-rounded" (click)="prev(daily.date)"></button>
      <button pButton pRipple type="button" icon="pi pi-arrow-right" class="p-button-rounded p-ml-auto" (click)="next(daily.date)"></button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements OnInit {

  private mealDaily$: Observable<Meal>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }


  ngOnInit(): void {
    this.mealDaily$ = this.store$.select(MealStoreSelectors.selectMealDaily)
  }


  next(date: string) {
    const date2 = dayjs(date).add(1,'day').format('YYYY-MM-DD');
    console.log('date-next',  getBaseDate(new Date(date2)))
    this.store$.dispatch(RouterStoreActions.RouterGo({path: ['meal/daily-detail', date2]}));
  }

  prev(date: string) {
    const date2 = dayjs(date).subtract(1,'day').format('YYYY-MM-DD');
    console.log('date-prev', date2)
    this.store$.dispatch(RouterStoreActions.RouterGo({path: ['meal/daily-detail', date2]}));
  }
};





