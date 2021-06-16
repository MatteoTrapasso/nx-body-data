import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {RootStoreState} from '@root-store/index';
import {Meal} from "@models/vo/meal";
import {getBaseDate} from "@core/utils/date-utils";

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
    const item: Meal = new Meal();
    const dateA = new Date();
    item.date = getBaseDate(dateA);
    const data: PopUpData<Meal> = {
      item,
      props: {title: 'New Meal', route: 'meal'}
    };
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal', {outlets: {popUp: ['edit']}}],
      data
    }));
  }
}
