import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {RouterStoreActions} from '@root-store/router-store/index';
import {SlideMenuStoreActions} from '@root-store/slide-menu-store/index';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}


export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['home']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Home'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'User',
      icon: 'pi pi-fw pi-user-plus',
      // @ts-ignore
      roles: ['administrator'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['user']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'User'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'BodyData',
      icon: 'pi pi-fw pi-chart-line',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['body-data']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'BodyData'] // breadcrumb
          }
        }));
      }
    }
  ]
};
