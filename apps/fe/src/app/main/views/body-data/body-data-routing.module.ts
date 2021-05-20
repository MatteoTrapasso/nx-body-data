import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyDataMainComponent} from './body-data-main/body-data-main.component';
import {BodyDataEditComponent} from '@views/body-data/body-data-edit/body-data-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: BodyDataMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: BodyDataEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BodyDataRoutingModule {
}
