import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '@root-store/root-reducer';
import {RouterStoreModule} from './router-store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SlideMenuStoreModule} from '@root-store/slide-menu-store';
import { BodyDataStoreModule } from '@root-store/body-data-store';
import { AuthStoreModule } from '@root-store/auth-store';
import {EatStoreModule} from "@root-store/eat-store";
import {UserStoreModule} from "@root-store/user-store/user-store.module";

@NgModule({
  imports: [
    CommonModule,
    RouterStoreModule,
    SlideMenuStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EatStoreModule,
    UserStoreModule,
    BodyDataStoreModule,
    AuthStoreModule,
  ],
  declarations: []
})
export class RootStoreModule {
}
