import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EatDailyStoreActions, EatDailyStoreSelectors, RootStoreState} from '@root-store/index';
import {EatDaily} from "@models/vo/eat-daily";

@Component({
  selector: 'app-button-edit-many-test-eat-daily',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Edit many ({{itemsSelected.length}})" (click)="onEditMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonEditManyTestEatComponent implements OnInit {

  itemsSelected$: Observable<EatDaily[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(EatDailyStoreSelectors.selectItemsSelected)
    );
  }

  onEditMany(values: EatDaily[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        if (key !== '_id' && typeof result[key] === 'string') {
          result[key] = result[key] + ' edited' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(EatDailyStoreActions.EditManyRequest({items}));
  }

}
