import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MealMainComponent} from './meal-main/meal-main.component';
import {MealEditComponent} from '@views/meal/meal-edit/meal-edit.component';
import {MealDailyDetailComponent} from "@views/meal/meal-daily-detail/meal-daily-detail.component";

const routes: Routes = [
  {
    path: 'main',
    component: MealMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: MealEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: 'daily-detail/:date',
    component: MealDailyDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'daily-detail',
    component: MealDailyDetailComponent,
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
export class MealRoutingModule {
}
