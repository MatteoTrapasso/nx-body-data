import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BodyDataStoreActions, BodyDataStoreSelectors, RootStoreState} from '@root-store/index';
import {BodyData} from '@models/vo/body-data';

@Component({
  selector: 'app-button-delete-body-data',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteBodyDataComponent implements OnInit {

  itemsSelected$: Observable<BodyData[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(BodyDataStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: BodyData[]): void {
    this.store$.dispatch(BodyDataStoreActions.DeleteManyRequest({items}));
  }

}
