import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-meal',
  template: `
    <div class="p-d-flex p-p-3 card">
      <div class="p-d-flex p-flex-wrap">
        <div class="p-mr-2 p-mb-2">fat</div>
        <div class="p-mr-2 p-mb-2">protein</div>
        <div class="p-mr-2 p-mb-2">carbohydrates</div>
      </div>
      <div class="p-mr-2 p-ml-auto">
      <button pButton pRipple type="button" icon="pi pi-pencil"
              class="p-button-rounded p-button-success p-button-outlined p-mr-1" (click)="onEdit(item)"
              pTooltip="modify" tooltipPosition="top"></button>
      <button pButton pRipple type="button" icon="pi pi-times"
              class="p-button-rounded p-button-danger p-button-outlined" (click)="onDelete(item)" pTooltip="delete"
              tooltipPosition="top"></button>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }
}
