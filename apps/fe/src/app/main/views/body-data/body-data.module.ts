import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BodyDataEditComponent} from './body-data-edit/body-data-edit.component';
import {BodyDataMainComponent} from './body-data-main/body-data-main.component';
import {BodyDataListComponent} from './body-data-list/body-data-list.component';
import {BodyDataRoutingModule} from './body-data-routing.module';
import {ButtonNewBodyDataComponent} from './components/button-new-body-data.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteBodyDataComponent} from './components/button-delete-body-data.component';
import {ButtonEditManyTestBodyDataComponent} from './components/button-edit-many-test-body-data.component';
import {ButtonCreateManyTestBodyDataComponent} from './components/button-create-many-test-body-data.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {ChartModule} from 'primeng/chart';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from "primeng/selectbutton";
import {EatModule} from "@views/eat/eat.module";
import {MetabolicValueComponent} from "@views/body-data/components/metabolic-value";

@NgModule({
    declarations: [
        BodyDataEditComponent,
        BodyDataMainComponent,
        BodyDataListComponent,
        ButtonNewBodyDataComponent,
        ButtonDeleteBodyDataComponent,
        ButtonEditManyTestBodyDataComponent,
        ButtonCreateManyTestBodyDataComponent,
        MetabolicValueComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BodyDataRoutingModule,
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
        SelectButtonModule,
        EatModule
    ],
  providers: [],
  entryComponents: []
})
export class BodyDataModule {
}
