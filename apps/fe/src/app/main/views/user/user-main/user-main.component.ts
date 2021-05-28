import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {User} from "@models/vo/user";
import {UserStoreActions} from "@root-store/index";

@Component({
  selector: 'app-user-main',
  templateUrl: 'user-main.component.html',
  styles: []
})
export class UserMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<User> = UserStoreActions.actions;
  eats$: Observable<any>;
  eatOptions: any;

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
}
