import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BodyDataStoreSelectors, RootStoreState} from '@root-store/index';
import {BodyData} from "@models/vo/body-data";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-metabolic-value-eat',
  template: `
    <div class="p-grid p-dir-col" style="padding-top: 10px">
      <div class="p-col">
        <p-button pTooltip="BASAL METABOLISM" tooltipPosition="left" (click)="showPositionDialog('right')"
                  icon="pi pi-info-circle" label="{{metabolic$ | async}} kcal"
                  styleClass="p-button-warning"></p-button>
      </div>
    </div>
    <p-dialog header="BASAL METABOLISM" [(visible)]="displayPosition" [position]="position" [modal]="true"
              [style]="{width: '50vw'}" [baseZIndex]="10000"
              [draggable]="false" [resizable]="false">
      <p>Basal metabolic rate (BMR) is the total number of calories that your body needs to perform basic,
        life-sustaining functions. These basal functions include circulation, breathing, cell production, nutrient
        processing, protein synthesis, and ion transport.
      </p>
      <p style="font-size: x-small">
        * estimated with the Harris-Benedict equation
      </p>
      <ng-template pTemplate="footer">
        <p-button icon="pi pi-check" (click)="displayPosition=false" label="Ok" styleClass="p-button-text"></p-button>
      </ng-template>
    </p-dialog>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetabolicValueComponent implements OnInit {

  metabolic$: Observable<any>
  itemsSelected$: Observable<any>
  displayModal: boolean;
  displayBasic: boolean;
  displayPosition: boolean;
  position: string;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }


  ngOnInit() {

    this.metabolic$ = this.store$.select(
      BodyDataStoreSelectors.selectLastItem
    ).pipe(map((value: BodyData) => {
      return metabolic(value.height, value.weight, value.gender, value.bDate)
    }));

  }

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const metabolic = (height: any, weight: any, gender: any, bDate: any) => {
  if (gender == 'M') {
    const i = 66.473 + (13.7516 * weight) + (5.0033 * height) - (getAge(bDate) * 6.755)
    return parseInt(String(i))
  } else {
    const i = 655.095 + (9.563 * weight) + (1.8496 * height) - (getAge(bDate) * 4.6756)
    return parseInt(String(i))
  }
};





