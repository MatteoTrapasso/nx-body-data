import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {MealStoreActions, MealStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Meal} from '@models/vo/meal';
import {RouterStoreActions} from '@root-store/router-store/index';
import {filter, map, tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {selectMealThisDay} from "@root-store/meal-store/selectors";

@Component({
  selector: 'app-meal-list',
  templateUrl: `meal-list.component.html`,
  styleUrls: [`meal-list.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealListComponent implements OnInit {

  collection$: Observable<any>;
  cols: any;
  itemsSelected$: Observable<Meal[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('MealComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('MealListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(MealStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      MealStoreSelectors.selectMealThisDay
    )/*.pipe (
      map(items =>
        items.filter(item => item.date === MealStoreSelectors.selectMealDaily.toString())));*/



  /*=== MealStoreSelectors.selectMealDaily*/

  }

  onEdit(item): void {
    console.log('MealListComponent.onEdit()');

    const data: PopUpData<Meal> = {
      item,
      props: {title: 'Edit Meal', route: 'meal'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('MealListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Meal> = {
      item,
      props: {title: 'Copy Meal', route: 'meal'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(MealStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Meal[]): void {
    console.log('MealListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(MealStoreActions.SelectItems({items}));
  }

}
