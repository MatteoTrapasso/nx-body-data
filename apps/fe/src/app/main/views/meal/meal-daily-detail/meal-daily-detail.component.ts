import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {FoodStoreActions, MealStoreActions, MealStoreSelectors, RouterStoreActions} from "@root-store/index";
import {map} from "rxjs/operators";
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
  foods: [any]

  constructor(private store$: Store,
  private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.store$.dispatch(FoodStoreActions.SearchRequest({queryParams: {}}));
      this.meals$ = this.store$.select(
        MealStoreSelectors.selectAll
      ).pipe(map((values: Meal[]) => {

          const initialState = {
            labels: [],
            datasets: [
              {
                label: 'Kcal',
                hidden: false,
                data: [],
                fill: false,
                borderColor: '#42A5F5',
              },
              {
                label: 'fat',
                hidden: false,
                data: [],
                fill: false,
                borderColor: '#FBC02D',
              },
              {
                label: 'proteins',
                hidden: false,
                data: [],
                fill: false,
                borderColor: '#D32F2F',
              },
              {
                label: '\n' +
                  'carbohydrates',
                hidden: false,
                data: [],
                fill: false,
                borderColor: '#689F38',
              },
            ]
          };

          const result = values.sort((a, b) => {
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
            .reduce(
              (previous, current) => {
                console.log('previous', previous);
                console.log('current', current);
                previous.labels.push(current.date);
                /*previous.datasets[0].data.push(current.kcal);*/
                return previous;
              }, initialState
            );
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
