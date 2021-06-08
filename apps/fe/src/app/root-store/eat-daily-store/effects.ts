import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {EatDaily} from "@models/vo/eat-daily";
import {EatDailyService} from '@services/eat-daily.service';
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
export class EatDailyStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: EatDailyService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<EatDaily>(this.service),
    searchResponse<EatDaily>(actions, {dispatchResponse: false}),
    searchCatchError<EatDaily>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<EatDaily>(this.service),
    deleteResponse<EatDaily>(actions, EatDaily, {dispatchResponse: false}),
    deleteCatchError<EatDaily>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<EatDaily>(this.service),
    deleteManyResponse<EatDaily>(actions, EatDaily, {dispatchResponse: false}),
    deleteManyCatchError<EatDaily>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<EatDaily>(this.service),
    createResponse<EatDaily>(actions, {dispatchResponse: false}),
    createCatchError<EatDaily>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<EatDaily>(this.service),
    createManyResponse<EatDaily>(actions, {dispatchResponse: false}),
    createManyCatchError<EatDaily>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<EatDaily>(this.service),
    editResponse<EatDaily>(actions, {dispatchResponse: false}),
    editCatchError<EatDaily>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<EatDaily>(this.service),
    editManyResponse<EatDaily>(actions, {dispatchResponse: false}),
    editManyCatchError<EatDaily>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<EatDaily>(this.service),
    selectResponse<EatDaily>(actions, {dispatchResponse: false}),
    selectCatchError<EatDaily>(actions),
    repeat()
  ));

}
