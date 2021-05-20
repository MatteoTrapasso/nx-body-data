import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Names} from './names';
import {State} from './state';
import {AuthModule} from '@auth0/auth0-angular';
import {AuthenticationService} from '@root-store/auth-store/authentication.service';
import {LoginModule} from './login.component';
import {Profile} from '@root-store/auth-store/profile';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Profile>>(`${Names.NAME}-store Reducers`);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
    EffectsModule.forFeature([AuthStoreEffects]),
   /* AuthModule.forRoot({
      domain: 'bodydata.eu.auth0.com',
      clientId: 'lCN6OO71OXxgt9Rz2dC5BakIwK9mmfL3',
      redirectUri: window.location.origin,
    }),*/
    LoginModule,
  ],
  declarations: [],
  providers: [AuthStoreEffects,
    AuthenticationService,
    {
      provide: INJECTION_TOKEN,
      useFactory: (): ActionReducer<State> => featureReducer
    }
  ]
})
export class AuthStoreModule {
}
