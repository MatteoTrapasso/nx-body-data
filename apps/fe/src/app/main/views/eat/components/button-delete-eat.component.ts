import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EatStoreActions, EatStoreSelectors, RootStoreState} from '@root-store/index';
import {Eat} from '@models/vo/eat';

@Component({
  selector: 'app-button-delete-eat',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteEatComponent implements OnInit {

  itemsSelected$: Observable<Eat[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(EatStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Eat[]): void {
    this.store$.dispatch(EatStoreActions.DeleteManyRequest({items}));
  }

}
