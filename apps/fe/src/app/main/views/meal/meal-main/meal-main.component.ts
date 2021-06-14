import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MealStoreActions, MealStoreSelectors, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Meal} from "@models/vo/meal";

@Component({
  selector: 'app-meal-main',
  templateUrl: 'meal-main.component.html',
  styles: []
})
export class MealMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Meal> = MealStoreActions.actions;
  meals$: Observable<any>;
  mealOptions: any;

  ngOnInit(): void {

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
            /*  previous.datasets[0].data.push(current.kcal);*/
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
}
