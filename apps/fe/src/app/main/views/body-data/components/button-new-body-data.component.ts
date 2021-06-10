import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {BodyData} from '@models/vo/body-data';
import {BodyDataStoreSelectors, RootStoreState} from '@root-store/index';
import {getBaseDate} from "@core/utils/date-utils";

@Component({
  selector: 'app-button-new-body-data',
  template: `
    <button *ngLet="lastItem$|async as lastItem" type="button" pButton icon="pi pi-plus"
            label="Add" (click)="onCreate(lastItem)"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewBodyDataComponent implements OnInit {

  disabled$: Observable<boolean>;
  lastItem$: Observable<BodyData>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);

    this.lastItem$ = this.store$.pipe(
      select(BodyDataStoreSelectors.selectLastItem)
    )
  }

  onCreate(itemA) {
    const item = {...itemA, _id:undefined};
    const dateA = new Date();
    item.date = getBaseDate(dateA);
    const data: PopUpData<BodyData> = {
      item,
      props: {title: 'New BodyData', route: 'body-data'}
    };
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['body-data', {outlets: {popUp: ['edit']}}],
      data
    }));
  }
}
