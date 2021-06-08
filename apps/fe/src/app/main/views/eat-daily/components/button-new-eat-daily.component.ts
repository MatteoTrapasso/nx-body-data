import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {RootStoreState} from '@root-store/index';
import {EatDaily} from "@models/vo/eat-daily";

@Component({
  selector: 'app-button-new-eat-daily',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="Add" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewEatDailyComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: EatDaily = new EatDaily();
    const dateA = new Date();
    item.date = dateA.getMonth() + 1 + '/' + dateA.getDate() + '/' + dateA.getFullYear();
    const data: PopUpData<EatDaily> = {
      item,
      props: {title: 'New EatDaily', route: 'eat-daily'}
    };
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['eat-daily', {outlets: {popUp: ['edit']}}],
      data
    }));
  }
}
