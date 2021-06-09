import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {EatStoreSelectors, RootStoreState, RouterStoreActions} from '@root-store/index';
import {Observable} from "rxjs";
import {Eat} from "@models/vo/eat";
import * as dayjs from 'dayjs'
import {getBaseDate} from "@core/utils/date-utils";

@Component({
  selector: 'app-navigationBar',
  template: `
    <div class="p-d-flex p-p-3 card" *ngLet="eatDaily$|async as daily">
      <button pButton pRipple type="button" icon="pi pi-arrow-left" class="p-button-rounded" (click)="prev(daily.date)"></button>
      <button pButton pRipple type="button" icon="pi pi-arrow-right" class="p-button-rounded p-ml-auto" (click)="next(daily.date)"></button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements OnInit {

  private eatDaily$: Observable<Eat>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }


  ngOnInit(): void {
    this.eatDaily$ = this.store$.select(EatStoreSelectors.selectEatDaily)
  }


  next(date: string) {
    const date2 = dayjs(date).add(1,'day').format('YYYY-MM-DD');
    console.log('date-next',  getBaseDate(new Date(date2)))
    this.store$.dispatch(RouterStoreActions.RouterGo({path: ['eat/daily-detail', date2]}));
  }

  prev(date: string) {
    const date2 = dayjs(date).subtract(1,'day').format('YYYY-MM-DD');
    console.log('date-prev', date2)
    this.store$.dispatch(RouterStoreActions.RouterGo({path: ['eat/daily-detail', date2]}));
  }
};





