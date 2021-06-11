import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  EatStoreActions,
  EatStoreSelectors,
  FoodStoreActions,
  FoodStoreSelectors,
  RootStoreState
} from '@root-store/index';
import {Observable} from 'rxjs';
import {Eat} from '@models/vo/eat';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Food} from "@models/vo/food";

@Component({
  selector: 'app-selected-food-list',
  templateUrl: `selected-food-list.component.html`,
  styleUrls: [`selected-food-list.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedFoodListComponent implements OnInit {


  collection$: Observable<Food[]>;
  cols: any;
  itemsSelected$: Observable<Food[]>;
  valueQty: number;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('EatComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('EatListComponent.ngOnInit()');
    this.valueQty = 0;
    this.itemsSelected$ = this.store$.pipe(
      select(FoodStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      FoodStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    /*    this.store$.dispatch(
          EatStoreActions.SearchRequest({queryParams: {}})
        );*/

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
