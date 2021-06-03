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
import {MetabolicValueComponent} from "@views/eat/components/metabolic-value";

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
    MetabolicValueComponent
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
        ChartModule
    ],
  providers: [],
  entryComponents: []
})
export class EatModule {
}
