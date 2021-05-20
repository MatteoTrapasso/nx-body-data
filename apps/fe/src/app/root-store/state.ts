import {BodyDataStoreState} from '@root-store/body-data-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
  auth: any;
  body_data: BodyDataStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
