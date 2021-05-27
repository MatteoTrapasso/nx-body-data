import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Eat} from '@models/vo/eat';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-eat',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Eat" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewEatComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Eat = new Eat();

    const data: PopUpData<Eat> = {
      item,
      props: {title: 'New Eat', route: 'eat'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['eat', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
