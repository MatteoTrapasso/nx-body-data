import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {EatStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Eat} from '@models/vo/eat';

@Component({
  selector: 'app-eat-main',
  templateUrl: 'eat-main.component.html',
  styles: []
})
export class EatMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Eat> = EatStoreActions.actions;

  ngOnInit(): void {
  }
}
