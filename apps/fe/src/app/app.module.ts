import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FooterModule} from '@components/footer/footer.module';
import {HeaderModule} from '@components/header/header.module';
import {SlideMenuModule} from '@components/slide-menu/slide-menu.module';
import {ProgressModule} from '@components/progress/progress.module';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {BreadcrumbModule} from '@components/breadcrumb/breadcrumb.module';
import {ClickOutsideModule} from '@core/directive/click-outside-directive';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    HttpClientModule,
    ConfirmDialogModule,
    FooterModule,
    HeaderModule,
    SlideMenuModule,
    NgLetModule,
    ProgressModule,
    BreadcrumbModule,
    ClickOutsideModule,
    CardModule,
    ChartModule,
    AuthModule.forRoot({
      domain: environment.DOMAIN,
      clientId: environment.CLIENT_ID,
      audience: 'https://'+environment.DOMAIN+'/api/v2/',
      redirectUri: window.location.origin,
      // The AuthHttpInterceptor configuration
      httpInterceptor: {
        allowedList: [
          environment.webServiceUri,
          environment.webServiceUri + '*',
        ],
      },
    }),
  ],
  providers: [ConfirmationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
