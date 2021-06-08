import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EatDailyEditComponent} from './eat-edit/eat-daily-edit.component';
import {EatDailyMainComponent} from './eat-main/eat-daily-main.component';
import {EatDailyRoutingModule} from './eat-daily-routing.module';
import {ButtonNewEatDailyComponent} from './components/button-new-eat-daily.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteEatDailyComponent} from './components/button-delete-eat-daily.component';
import {ButtonEditManyTestEatComponent} from './components/button-edit-many-test-eat-daily.component';
import {ButtonCreateManyTestEatDailyComponent} from './components/button-create-many-test-eat-daily.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {ChartModule} from "primeng/chart";
import {MetabolicValueComponent} from "@views/eat/components/metabolic-value";
import {TooltipModule} from "primeng/tooltip";
import {EatDailyListComponent} from "@views/eat-daily/eat-list/eat-daily-list.component";

@NgModule({
  declarations: [
    EatDailyEditComponent,
    EatDailyMainComponent,
    EatDailyListComponent,
    ButtonNewEatDailyComponent,
    ButtonDeleteEatDailyComponent,
    ButtonEditManyTestEatComponent,
    ButtonCreateManyTestEatDailyComponent,
    ButtonCreateManyTestEatDailyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EatDailyRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    ChartModule,
    TooltipModule
  ],
  providers: [],
  exports: [

  ],
  entryComponents: []
})
export class EatDailyModule {
}
