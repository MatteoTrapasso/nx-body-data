import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {MealStoreActions, RootStoreState} from '@root-store/index';
import {Meal} from "@models/vo/meal";
import {ConfirmationService} from "primeng/api";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-single-meal',
  template: `
    <div class="p-d-flex p-p-3 card">
      <p-fieldset legend={{item.type}} [toggleable]="true"
                  style="width: 100%; padding-top: 1rem !important; padding-left: 0 !important; margin-right: 10px !important;">
        <pre><strong>{{item.time}}</strong></pre>
        <pre><strong>{{kcal.toFixed(2)}} Kcal</strong></pre>
        <div class="p-d-flex w-100" style="display: flex;
                              justify-content: center;
                              align-items: center;">
          <div [style.width.%]=fat_dim style="background-color: #FBC02D; height: 20px;"></div>
          <div [style.width.%]=carbo_dim style="background-color: #689F38;height: 20px;"></div>
          <div [style.width.%]=protein_dim style="background-color: #D32F2F;height: 20px;"></div>
        </div>
      </p-fieldset>
      <div class="p-mr-2 p-ml-auto button" style="display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 40px;">
        <button pButton pRipple type="button" icon="pi pi-pencil"
                class="p-button-rounded p-button-success p-button-outlined p-mr-1" (click)="onEdit(item)"
                pTooltip="modify" tooltipPosition="top"></button>
        <button pButton pRipple type="button" icon="pi pi-times"
                class="p-button-rounded p-button-danger p-button-outlined" (click)="onDelete(item)" pTooltip="delete"
                tooltipPosition="top"></button>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleMealComponent implements OnInit {
  @Input() item?: Meal;
  fat_dim: number
  protein_dim: number
  carbo_dim: number
  kcal: number

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('singleMeal.constructor()');
  }

  ngOnInit() {
    const fat = (this.item.menu.reduce((tot, menu) => tot + +menu.food.Total_fat / 100 * menu.qty, 0))
    const protein = (this.item.menu.reduce((tot, menu) => tot + +menu.food.Total_protein / 100 * menu.qty, 0))
    const carbo = (this.item.menu.reduce((tot, menu) => tot + +menu.food.Available_carbohydrates_MSE / 100 * menu.qty, 0))
    this.kcal = (this.item.menu.reduce((tot, menu) => tot + +menu.food.Energy_Rec_with_fibre / 100 * menu.qty, 0))

    const tot = fat + protein + carbo
    this.fat_dim = fat * 100 / tot
    this.protein_dim = protein * 100 / tot
    this.carbo_dim = carbo * 100 / tot

  }

  onEdit(item): void {
    console.log('MealListComponent.onEdit()');

    const data: PopUpData<Meal> = {
      item,
      props: {title: 'Edit Meal', route: 'meal'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal', {outlets: {popUp: ['edit']}}],
      data
    }));

  }


  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(MealStoreActions.DeleteRequest({item}));
      }
    });

  }
}
