import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {EatStoreActions, EatStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Eat} from '@models/vo/eat';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-eat-list',
  templateUrl: `eat-list.component.html`,
  styleUrls: [`eat-list.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EatListComponent implements OnInit {


  collection$: Observable<Eat[]>;
  cols: any;
  itemsSelected$: Observable<Eat[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('EatComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('EatListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(EatStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      EatStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      EatStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('EatListComponent.onEdit()');

    const data: PopUpData<Eat> = {
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
    const data: PopUpData<Eat> = {
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
        this.store$.dispatch(EatStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Eat[]): void {
    console.log('EatListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(EatStoreActions.SelectItems({items}));
  }

}
