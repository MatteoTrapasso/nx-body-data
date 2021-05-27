import {BodyDataStoreState} from '@root-store/body-data-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';
import {EatStoreState} from "@root-store/eat-store/index";

export interface State {
  eat: EatStoreState.State;
  auth: any;
  body_data: BodyDataStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
