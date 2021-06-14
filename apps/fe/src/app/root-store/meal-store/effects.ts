import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Meal} from '@models/vo/meal';
import {MealService} from '@services/meal.service';
import {
  createCall, createCatchError, createResponse,
  createManyCall, createManyCatchError, createManyResponse,
  deleteCall, deleteCatchError, deleteResponse,
  deleteManyCall, deleteManyCatchError, deleteManyResponse,
  editCall, editCatchError, editResponse,
  editManyCall, editManyCatchError, editManyResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class MealStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: MealService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Meal>(this.service),
    searchResponse<Meal>(actions, {dispatchResponse: false}),
    searchCatchError<Meal>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Meal>(this.service),
    deleteResponse<Meal>(actions, Meal, {dispatchResponse: false}),
    deleteCatchError<Meal>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Meal>(this.service),
    deleteManyResponse<Meal>(actions, Meal, {dispatchResponse: false}),
    deleteManyCatchError<Meal>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Meal>(this.service),
    createResponse<Meal>(actions, {dispatchResponse: false}),
    createCatchError<Meal>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Meal>(this.service),
    createManyResponse<Meal>(actions, {dispatchResponse: false}),
    createManyCatchError<Meal>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Meal>(this.service),
    editResponse<Meal>(actions, {dispatchResponse: false}),
    editCatchError<Meal>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Meal>(this.service),
    editManyResponse<Meal>(actions, {dispatchResponse: false}),
    editManyCatchError<Meal>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Meal>(this.service),
    selectResponse<Meal>(actions, {dispatchResponse: false}),
    selectCatchError<Meal>(actions),
    repeat()
  ));

}
