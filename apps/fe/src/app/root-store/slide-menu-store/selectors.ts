import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {Names} from './names';
import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {AuthStoreSelectors} from '@root-store/auth-store/index';

const getOpen = (state: State): boolean => state.open;
const getItem = (state: State): SlideMenuItem => state.item;
const getItems = (state: State): MenuItem[] => state.items;
const getBreadcrumb = (value: SlideMenuItem): string[] => value.breadcrumb;

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

export const selectItems: MemoizedSelector<object, MenuItem[]> = createSelector(
  selectState,
  getItems
);

export const selectItem: MemoizedSelector<object, SlideMenuItem> = createSelector(
  selectState,
  getItem
);


export const selectOpen: MemoizedSelector<object, boolean> = createSelector(
  selectState,
  getOpen
);

export const selectBreadcrumb: MemoizedSelector<object, string[]> = createSelector(
  selectItem,
  getBreadcrumb
);

export const selectBreadcrumbRenderized: MemoizedSelector<object, string> = createSelector(
  selectBreadcrumb,
  (values: string[]): string => {
    return values.join(' > ');
  }
);
export const selectItemsAuth: MemoizedSelector<object, MenuItem[]> = createSelector(
  selectItems,
  AuthStoreSelectors.selectRoles,
  (menuItems: MenuItem[], roles) => {
    roles = roles ? roles : ['guest'];
    return menuItems.reduce((previous, current) => {
      console.log('reduce.()');
      // @ts-ignore
      if ((current.roles as string[]).find(value => roles.indexOf(value) !== -1)) {
        return [...previous, current];
      }
      return previous;
    }, []);
  }
);
