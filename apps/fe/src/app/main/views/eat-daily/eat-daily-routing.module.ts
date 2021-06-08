import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EatDailyMainComponent} from './eat-main/eat-daily-main.component';
import {EatDailyEditComponent} from "@views/eat-daily/eat-edit/eat-daily-edit.component";

const routes: Routes = [
  {
    path: 'main', /*/:date*/
    component: EatDailyMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: EatDailyEditComponent,
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
export class EatDailyRoutingModule {
}
