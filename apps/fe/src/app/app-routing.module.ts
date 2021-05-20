import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@root-store/auth-store/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {
    path: 'body-data',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/views/body-data/body-data.module').then(m => m.BodyDataModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
