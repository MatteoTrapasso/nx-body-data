import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {BodyData} from '@models/vo/body-data';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-body-data',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="Add" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewBodyDataComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: BodyData = new BodyData();
    const dateA = new Date();
    item.date = dateA.getMonth() + 1 + '/' + dateA.getDate() + '/' + dateA.getFullYear();
    const data: PopUpData<BodyData> = {
      item,
      props: {title: 'New BodyData', route: 'body-data'}
    };
    item.user = 'Matteo'; // passare user loggato
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['body-data', {outlets: {popUp: ['edit']}}],
      data
    }));
  }
}
