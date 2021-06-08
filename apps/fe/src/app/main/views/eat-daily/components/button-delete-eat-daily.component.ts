import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EatDailyStoreActions, EatDailyStoreSelectors, RootStoreState} from '@root-store/index';
import {EatDaily} from "@models/vo/eat-daily";

@Component({
  selector: 'app-button-delete-eat-daily',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteEatDailyComponent implements OnInit {

  itemsSelected$: Observable<EatDaily[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(EatDailyStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: EatDaily[]): void {
    this.store$.dispatch(EatDailyStoreActions.DeleteManyRequest({items}));
  }

}
