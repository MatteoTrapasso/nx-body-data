import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {RootStoreState} from '@root-store/index';
import {User} from "@models/vo/user";

@Component({
  selector: 'app-button-new-user',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="Add" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewUserComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: User = new User();
    const data: PopUpData<User> = {
      item,
      props: {title: 'New User', route: 'user'}
    };
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['user', {outlets: {popUp: ['edit']}}],
      data
    }));
  }
}
