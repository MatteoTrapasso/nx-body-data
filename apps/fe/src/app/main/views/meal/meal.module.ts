import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MealEditComponent} from './meal-edit/meal-edit.component';
import {MealMainComponent} from './meal-main/meal-main.component';
import {MealListComponent} from './meal-list/meal-list.component';
import {MealRoutingModule} from './meal-routing.module';
import {ButtonNewMealComponent} from './components/button-new-meal.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteMealComponent} from './components/button-delete-meal.component';
import {ButtonEditManyTestMealComponent} from './components/button-edit-many-test-meal.component';
import {ButtonCreateManyTestMealComponent} from './components/button-create-many-test-meal.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {ChartModule} from "primeng/chart";
import {TooltipModule} from "primeng/tooltip";
import {MealDailyDetailComponent} from './meal-daily-detail/meal-daily-detail.component';
import {NavigationBarComponent} from "@views/meal/components/navigationBar";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MultiSelectModule} from "primeng/multiselect";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {FieldsetModule} from 'primeng/fieldset';
import {SingleMealComponent} from "@views/meal/components/single-meal";

@NgModule({
  declarations: [
    MealEditComponent,
    MealMainComponent,
    MealListComponent,
    ButtonNewMealComponent,
    ButtonDeleteMealComponent,
    ButtonEditManyTestMealComponent,
    ButtonCreateManyTestMealComponent,
    ButtonCreateManyTestMealComponent,
    MealDailyDetailComponent,
    NavigationBarComponent,
    SingleMealComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MealRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    ChartModule,
    TooltipModule,
    RippleModule,
    DropdownModule,
    AutoCompleteModule,
    MultiSelectModule,
    InputNumberModule,
    CalendarModule,
    FieldsetModule,
  ],
  providers: [],
  exports: [],
  entryComponents: []
})
export class MealModule {
}
