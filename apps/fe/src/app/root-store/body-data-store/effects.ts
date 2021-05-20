import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {BodyData} from '@models/vo/body-data';
import {BodyDataService} from '@services/body-data.service';
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
export class BodyDataStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: BodyDataService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<BodyData>(this.service),
    searchResponse<BodyData>(actions, {dispatchResponse: false}),
    searchCatchError<BodyData>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<BodyData>(this.service),
    deleteResponse<BodyData>(actions, BodyData, {dispatchResponse: false}),
    deleteCatchError<BodyData>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<BodyData>(this.service),
    deleteManyResponse<BodyData>(actions, BodyData, {dispatchResponse: false}),
    deleteManyCatchError<BodyData>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<BodyData>(this.service),
    createResponse<BodyData>(actions, {dispatchResponse: false}),
    createCatchError<BodyData>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<BodyData>(this.service),
    createManyResponse<BodyData>(actions, {dispatchResponse: false}),
    createManyCatchError<BodyData>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<BodyData>(this.service),
    editResponse<BodyData>(actions, {dispatchResponse: false}),
    editCatchError<BodyData>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<BodyData>(this.service),
    editManyResponse<BodyData>(actions, {dispatchResponse: false}),
    editManyCatchError<BodyData>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<BodyData>(this.service),
    selectResponse<BodyData>(actions, {dispatchResponse: false}),
    selectCatchError<BodyData>(actions),
    repeat()
  ));

}
