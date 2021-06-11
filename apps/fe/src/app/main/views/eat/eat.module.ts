import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EatEditComponent} from './eat-edit/eat-edit.component';
import {EatMainComponent} from './eat-main/eat-main.component';
import {EatListComponent} from './eat-list/eat-list.component';
import {EatRoutingModule} from './eat-routing.module';
import {ButtonNewEatComponent} from './components/button-new-eat.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteEatComponent} from './components/button-delete-eat.component';
import {ButtonEditManyTestEatComponent} from './components/button-edit-many-test-eat.component';
import {ButtonCreateManyTestEatComponent} from './components/button-create-many-test-eat.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {ChartModule} from "primeng/chart";
import {TooltipModule} from "primeng/tooltip";
import {EatDailyDetailComponent} from './eat-daily-detail/eat-daily-detail.component';
import {NavigationBarComponent} from "@views/eat/components/navigationBar";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MultiSelectModule} from "primeng/multiselect";
import {SelectedFoodListComponent} from "@views/eat/selected-food-list/selected-food-list.component";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";

@NgModule({
  declarations: [
    EatEditComponent,
    EatMainComponent,
    EatListComponent,
    ButtonNewEatComponent,
    ButtonDeleteEatComponent,
    ButtonEditManyTestEatComponent,
    ButtonCreateManyTestEatComponent,
    ButtonCreateManyTestEatComponent,
    EatDailyDetailComponent,
    NavigationBarComponent,
    SelectedFoodListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EatRoutingModule,
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
    CalendarModule
  ],
  providers: [],
  exports: [],
  entryComponents: []
})
export class EatModule {
}
