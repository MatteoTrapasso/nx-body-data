import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {
  BodyDataStoreSelectors,
  FoodStoreActions,
  MealStoreActions,
  MealStoreSelectors,
  RouterStoreActions
} from "@root-store/index";
import {map, reduce, tap} from "rxjs/operators";
import {Meal} from "@models/vo/meal";
import {PopUpData} from "@root-store/router-store/pop-up-base.component";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'nx-body-data-meal-daily-detail',
  templateUrl: './meal-daily-detail.component.html',
  styleUrls: ['./meal-daily-detail.component.css']
})
export class MealDailyDetailComponent implements OnInit {

  meals$: Observable<any>
  mealOptions: any;
  foods: [any];

  constructor(private store$: Store,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.store$.dispatch(FoodStoreActions.SearchRequest({queryParams: {}}));
    this.meals$ = this.store$.select(
      MealStoreSelectors.selectAll
    ).pipe(
      map(values => { //ordina per data
        return values.sort((a, b) => {
          const tempA = a.date.split('/');
          const A = (tempA[2] + tempA[0] + tempA[1]) + 0;
          const tempB = b.date.split('/');
          const B = (tempB[2] + tempB[0] + tempB[1]) + 0;
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          // i nomi devono essere uguali*!/
          return 0;

        })
      }),
      map((values: Meal[]) => {     //trasforma la lista di Meal[] in un oggetto {[key:string]:Meal[]}
        return values.reduce((previousValue, currentValue) => {
          if (!previousValue[currentValue.date]) {
            previousValue[currentValue.date] = []
          }
          previousValue[currentValue.date].push(currentValue)
          return previousValue
        }, {})
      }),
      map((values: { [key: string]: Meal[] }) => {
          console.log('values', values)
          const keys = Object.keys(values)


          const datasets = {
            kcal: {
              label: 'Kcal',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#42A5F5',
            },
            fat: {
              label: 'fat',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#FBC02D',
            },
            proteins: {
              label: 'proteins',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#D32F2F',
            },
            carbohydrates: {
              label: 'carbohydrates',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#689F38',
            }
          }

          keys.forEach((date: string) => {
            const meals: Meal[] = values[date];
            meals.forEach((meal: Meal) => {
              datasets.kcal.data.push(meal.menu.reduce((tot, menu) => tot + +menu.food.Energy_Rec_with_fibre/100*menu.qty,0))
              datasets.fat.data.push(meal.menu.reduce((tot, menu) => tot + +menu.food.Total_fat/100*menu.qty,0))
              datasets.proteins.data.push(meal.menu.reduce((tot, menu) => tot + +menu.food.Total_protein/100*menu.qty,0))
              datasets.carbohydrates.data.push(meal.menu.reduce((tot, menu) => tot + +menu.food.Available_carbohydrates_MSE/100*menu.qty,0))
            })
          })
          const result = {
            labels: keys,
            datasets: Object.values(datasets)
          };

          console.log('result', result);
          return result;
        }
      )
    );

    this.mealOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }

  onEdit(item): void {
    console.log('MealDailyDetailComponent.onEdit()');

    const data: PopUpData<Meal> = {
      item,
      props: {title: 'Edit Meal', route: 'meal/daily-detail/:data'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal/daily-detail/:data', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('MealDailyDetailComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Meal> = {
      item,
      props: {title: 'Copy Meal', route: 'meal/daily-detail/:data'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['meal/daily-detail/:data', {outlets: {popUp: ['edit']}}],
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
