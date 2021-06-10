import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {
  createCall,
  createCatchError,
  createManyCall,
  createManyCatchError,
  createManyResponse,
  createResponse,
  deleteCall,
  deleteCatchError,
  deleteManyCall,
  deleteManyCatchError,
  deleteManyResponse,
  deleteResponse,
  editCall,
  editCatchError,
  editManyCall,
  editManyCatchError,
  editManyResponse,
  editResponse,
  searchCall,
  searchCatchError,
  searchResponse,
  selectCall,
  selectCatchError,
  selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';
import {FoodService} from "@services/food.service";
import {Food} from "@models/vo/food";

@Injectable()
export class FoodStoreEffects {
  constructor(private readonly actions$: Actions, private readonly service: FoodService) {
  }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Food>(this.service),
    searchResponse<Food>(actions, {dispatchResponse: false}),
    searchCatchError<Food>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Food>(this.service),
    deleteResponse<Food>(actions, Food, {dispatchResponse: false}),
    deleteCatchError<Food>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Food>(this.service),
    deleteManyResponse<Food>(actions, Food, {dispatchResponse: false}),
    deleteManyCatchError<Food>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Food>(this.service),
    createResponse<Food>(actions, {dispatchResponse: false}),
    createCatchError<Food>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Food>(this.service),
    createManyResponse<Food>(actions, {dispatchResponse: false}),
    createManyCatchError<Food>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Food>(this.service),
    editResponse<Food>(actions, {dispatchResponse: false}),
    editCatchError<Food>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Food>(this.service),
    editManyResponse<Food>(actions, {dispatchResponse: false}),
    editManyCatchError<Food>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Food>(this.service),
    selectResponse<Food>(actions, {dispatchResponse: false}),
    selectCatchError<Food>(actions),
    repeat()
  ));

}
