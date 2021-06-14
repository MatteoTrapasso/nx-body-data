import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MealStoreActions, MealStoreSelectors, RootStoreState} from '@root-store/index';
import {Meal} from '@models/vo/meal';

@Component({
  selector: 'app-button-delete-meal',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteMealComponent implements OnInit {

  itemsSelected$: Observable<Meal[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(MealStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Meal[]): void {
    this.store$.dispatch(MealStoreActions.DeleteManyRequest({items}));
  }

}
