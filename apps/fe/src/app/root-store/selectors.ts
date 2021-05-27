import {BodyDataStoreSelectors} from '@root-store/body-data-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';
import {EatStoreSelectors} from "@root-store/eat-store/index";

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(
    EatStoreSelectors.selectError,
BodyDataStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(
    EatStoreSelectors.selectError,
BodyDataStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

