import {BodyDataStoreState} from '@root-store/body-data-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';
import {UserStoreState} from "@root-store/user-store/index";
import {FoodStoreState} from "@root-store/food-store/index";
import {MealStoreState} from "@root-store/meal-store/index";

export interface State {
  user: UserStoreState.State;
  auth: any;
  body_data: BodyDataStoreState.State;
  slide_menu: SlideMenuStoreState.State;
  food: FoodStoreState.State;
  meal: MealStoreState.State;
}
