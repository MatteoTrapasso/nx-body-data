import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EatMainComponent} from './eat-main/eat-main.component';
import {EatEditComponent} from '@views/eat/eat-edit/eat-edit.component';
import {EatDailyDetailComponent} from "@views/eat/eat-daily-detail/eat-daily-detail.component";

const routes: Routes = [
  {
    path: 'main',
    component: EatMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: EatEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: 'daily-detail/:date',
    component: EatDailyDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'daily-detail',
    component: EatDailyDetailComponent,
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
export class EatRoutingModule {
}
