import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BodyDataStoreActions, BodyDataStoreSelectors, RootStoreState, UserStoreSelectors} from '@root-store/index';
import {Observable} from 'rxjs';
import {BodyData} from '@models/vo/body-data';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: `user-list.component.html`,
  styleUrls: [`user-list.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  user$: Observable<any>;
  cols: any;
  itemsSelected$: Observable<BodyData[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('BodyDataListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('BodyDataListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(BodyDataStoreSelectors.selectItemsSelected)
    );


    this.user$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserData)
    );

  }

  onEdit(item): void {
    console.log('BodyDataListComponent.onEdit()');

    const data: PopUpData<BodyData> = {
      item,
      props: {title: 'Edit BodyData', route: 'body-data'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['body-data', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('BodyDataListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<BodyData> = {
      item,
      props: {title: 'Copy BodyData', route: 'body-data'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['body-data', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(BodyDataStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: BodyData[]): void {
    console.log('BodyDataListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(BodyDataStoreActions.SelectItems({items}));
  }

}
