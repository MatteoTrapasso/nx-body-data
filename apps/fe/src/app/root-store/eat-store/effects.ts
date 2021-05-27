import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Eat} from '@models/vo/eat';
import {EatService} from '@services/eat.service';
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
export class EatStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: EatService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Eat>(this.service),
    searchResponse<Eat>(actions, {dispatchResponse: false}),
    searchCatchError<Eat>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Eat>(this.service),
    deleteResponse<Eat>(actions, Eat, {dispatchResponse: false}),
    deleteCatchError<Eat>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Eat>(this.service),
    deleteManyResponse<Eat>(actions, Eat, {dispatchResponse: false}),
    deleteManyCatchError<Eat>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Eat>(this.service),
    createResponse<Eat>(actions, {dispatchResponse: false}),
    createCatchError<Eat>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Eat>(this.service),
    createManyResponse<Eat>(actions, {dispatchResponse: false}),
    createManyCatchError<Eat>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Eat>(this.service),
    editResponse<Eat>(actions, {dispatchResponse: false}),
    editCatchError<Eat>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Eat>(this.service),
    editManyResponse<Eat>(actions, {dispatchResponse: false}),
    editManyCatchError<Eat>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Eat>(this.service),
    selectResponse<Eat>(actions, {dispatchResponse: false}),
    selectCatchError<Eat>(actions),
    repeat()
  ));

}
