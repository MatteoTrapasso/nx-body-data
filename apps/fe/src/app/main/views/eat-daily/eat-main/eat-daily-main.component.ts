import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {EatDailyStoreActions, EatDailyStoreSelectors, EatStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EatDaily} from "@models/vo/eat-daily";

@Component({
  selector: 'app-eat-daily-main',
  templateUrl: 'eat-daily-main.component.html',
  styles: []
})
export class EatDailyMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<EatDaily> = EatDailyStoreActions.actions;
  eats$: Observable<any>;
  eatOptions: any;

  ngOnInit(): void {

    this.eats$ = this.store$.select(
      EatDailyStoreSelectors.selectAll
    ).pipe(map((values: EatDaily[]) => {

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
              borderColor: '#f5ce42',
            },
            {
              label: 'proteins',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#F5425DFF',
            },
            {
              label: '\n' +
                'carbohydrates',
              hidden: false,
              data: [],
              fill: false,
              borderColor: '#69f542',
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
              previous.datasets[0].data.push(current.kcal);
              return previous;
            }, initialState
          );
        console.log('result', result);
        return result;
      }
      )
    );

    this.eatOptions = {
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
