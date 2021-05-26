import {environmentBase} from './environment.base';

export const environment = {
  ...environmentBase,
  production: true,
  webServiceUri: 'https://body-data-crud.herokuapp.com/api/v1/'
};
