import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {EatStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigationBar',
  template: `
    <div class="p-d-flex p-p-3 card">
      <button pButton pRipple type="button" icon="pi pi-arrow-left" class="p-button-rounded"></button>
      <button pButton pRipple type="button" icon="pi pi-arrow-right" class="p-button-rounded p-ml-auto"></button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements OnInit {

  private EatDaily$: Observable<any>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }


  ngOnInit(): void {
    this.EatDaily$ = this.store$.select(EatStoreSelectors.selectEatDaily)
  }
};





