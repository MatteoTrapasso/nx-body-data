import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {selectCurrentUserProfile} from "@root-store/auth-store/selectors";
import {AuthStoreSelectors} from "@root-store/auth-store/index";
import {BodyDataStoreSelectors} from "@root-store/body-data-store/index";
import {map} from "rxjs/operators";

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

export const selectUserData = createSelector(
  AuthStoreSelectors.selectCurrentUserProfile,
  BodyDataStoreSelectors.selectLastItem,
  (currentUser, lastItem) => {
    return {currentUser, lastItem};
  }
)
