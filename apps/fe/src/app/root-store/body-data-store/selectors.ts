import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {BodyData} from "@models/vo/body-data";

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectItemSelected,
  selectItemsSelected,
  selectLastCriteria,
  selectError,
  selectIsLoading,
  selectIsLoaded,
  selectFilters,
  selectFilteredItems,
  selectIdSelected,
  selectIdsSelected,
  selectResponses,
} = adapter.getCrudSelectors(selectState);

export const selectLastItem = createSelector(
  selectAll,
  (values) => values.length ? values[values.length - 1] : new BodyData()
)
