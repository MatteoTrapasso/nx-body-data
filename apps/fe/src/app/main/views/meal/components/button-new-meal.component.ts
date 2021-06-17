import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {MealStoreSelectors, RootStoreState} from '@root-store/index';
import {Meal} from "@models/vo/meal";
import {getBaseDate} from "@core/utils/date-utils";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-button-new-meal',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="Add Meal" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewMealComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    this.store$.pipe(
      select(MealStoreSelectors.selectMealDaily),
      map(state => state.date),
      first()
    ).subscribe(value => {
      const item: Meal = new Meal();
      item.date = getBaseDate(value);
      item.menu = [];
      const data: PopUpData<Meal> = {
        item,
        props: {title: 'New Meal', route: 'meal'}
      };
      this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
        path: ['meal', {outlets: {popUp: ['edit']}}],
        data
      }));
    })
  }
}
