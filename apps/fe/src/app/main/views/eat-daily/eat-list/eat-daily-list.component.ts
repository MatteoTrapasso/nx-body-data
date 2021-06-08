import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {EatDailyStoreActions, EatDailyStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {EatDaily} from "@models/vo/eat-daily";

@Component({
  selector: 'app-eat-daily-list',
  templateUrl: `eat-daily-list.component.html`,
  styleUrls: [`eat-daily-list.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EatDailyListComponent implements OnInit {


  collection$: Observable<EatDaily[]>;
  cols: any;
  itemsSelected$: Observable<EatDaily[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('EatComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('EatListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(EatDailyStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      EatDailyStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      EatDailyStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('EatListComponent.onEdit()');

    const data: PopUpData<EatDaily> = {
      item,
      props: {title: 'Edit Eat', route: 'eat'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['eat', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('EatListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<EatDaily> = {
      item,
      props: {title: 'Copy Eat', route: 'eat'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['eat', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(EatDailyStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: EatDaily[]): void {
    console.log('EatListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(EatDailyStoreActions.SelectItems({items}));
  }

}
