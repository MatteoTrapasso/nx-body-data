import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {BodyDataStoreSelectors, EatStoreSelectors, RootStoreSelectors, RouterStoreSelectors} from "@root-store/index";
import {selectEatDaily} from "@root-store/eat-store/selectors";
import {map} from "rxjs/operators";
import {BodyData} from "@models/vo/body-data";
import {makeBmi} from "@views/body-data/body-data-main/body-data-main.component";
import {Eat} from "@models/vo/eat";

@Component({
  selector: 'nx-body-data-eat-daily-detail',
  templateUrl: './eat-daily-detail.component.html',
  styleUrls: ['./eat-daily-detail.component.css']
})
export class EatDailyDetailComponent implements OnInit {

  eats$: Observable<any>
  eatOptions: any;
  foods: [any]
  meals=[
    {foods: [{},{},{}], date: '18/06/2021', type: 'pranzo', user: 'user', _id: 'id'},
    {foods: [{},{},{}], date: '18/06/2021', type: 'cena', user: 'user', _id: 'id'},
    {foods: [{},{},{}], date: '18/06/2021', type: 'colazione', user: 'user', _id: 'id'},
    {foods: [{},{},{}], date: '18/06/2021', type: 'pranzo', user: 'user', _id: 'id'}
  ]

  constructor(private store$: Store) {
  }

  ngOnInit(): void {

      this.eats$ = this.store$.select(
        EatStoreSelectors.selectAll
      ).pipe(map((values: Eat[]) => {

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