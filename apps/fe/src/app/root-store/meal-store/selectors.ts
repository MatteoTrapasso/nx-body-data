import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {RouterStoreSelectors} from "@root-store/router-store/index";
import {getBaseDate} from "@core/utils/date-utils";
import {Meal} from "@models/vo/meal";

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

export const selectMealDaily = createSelector(
  RouterStoreSelectors.selectRouteParams,
  selectAll,
  (params, values) => {
    const date = params.date ? params.date : getBaseDate(new Date())
    console.log('date', date)
    const result = values.findIndex(value => {
      const dateA =  value.date
      const dateB =  date
/*      console.log('dateB', dateB)
      console.log('dateA', dateA)*/
      return dateA === dateB
    })
    if(result === -1){
      return {date} as Meal
    }
    return values[result]
  }
)

export const selectMealThisDay = createSelector(
  RouterStoreSelectors.selectRouteParams,
  selectAll,
  (params, values) => {
    const date = params.date ? params.date : getBaseDate(new Date())
    console.log('date', date)
    const result = values.filter(value => {
      const dateA =  value.date
      const dateB =  date
      /*      console.log('dateB', dateB)
            console.log('dateA', dateA)*/
      return dateA === dateB
    })
    if(!result){
      return {date} as Meal
    }
    return result
  }
)
