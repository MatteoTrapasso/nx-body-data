import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MealStoreActions} from "@root-store/meal-store/index";
import {Meal} from "@models/vo/meal";
import {getBaseDate} from "@core/utils/date-utils";
import {from, observable, Observable, of} from "rxjs";
import {FoodStoreSelectors} from "@root-store/food-store/index";
import {Food} from "@models/vo/food";
import {map, reduce} from "rxjs/operators";
import {BodyData} from "@models/vo/body-data";
import {metabolic} from "@views/body-data/components/metabolic-value";


@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: [`./meal-edit.component.scss`]
})
export class MealEditComponent extends PopUpBaseComponent<Meal> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo
  type: FormControl;
  food: FormControl;
  time: FormControl;
  data: any;
  foods$: Observable<Food[]>;
  selectedType: any;
  types: any[] = [
    {name: 'colazione', value: 'colazione'},
    {name: 'pranzo', value: 'pranzo'},
    {name: 'cena', value: 'cena'},
    {name: 'spuntino', value: 'spuntino'}
  ];
  options: any;
  selectedFoodsList: Food[] = [];
  totFat$: Observable<any>; //sum of (Total_fat/100) * gty selected foods
  totProtein: number;//sum of (Total_protein/100) * qty selected foods
  totCarb: number;//sum of (Available_carbohydrates_(MSE)/100) * qty selected foods
  totKcal: number;//sum of (Energy_Rec_with_fibre/100) * qty selected foods
  selectedFoods$ = of(this.selectedFoodsList);



  setItemPerform(value: Meal): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {

    this.foods$ = this.store$.select(
      FoodStoreSelectors.selectAll
    );


    this.data = {
      labels: ['Protein', 'Carbohydrates', 'Fat'],
      datasets: [
        {
          data: [1,1,1],
          backgroundColor: [
            "#D32F2F",
            "#689F38",
            "#FBC02D"
          ],
          hoverBackgroundColor: [
            "#D32F2F",
            "#689F38",
            "#FBC02D"
          ]
        }]
    };

    const date = new Date();


    this._id = this.fb.control(this._id, Validators.required);
    this.date = this.fb.control({value: getBaseDate(date), disabled: true});
    this.type = this.fb.control('', Validators.required);
    this.food = this.fb.control('', Validators.required);
    this.time = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      _id: this._id, // attributo
      date: this.date, // attributo
      type: this.type, // attributo
      food: this.food, // attributo
      time: this.time, // attributo
    });
  }

  acceptPerform(item: Meal): void {
    if (item._id) {
      this.store$.dispatch(MealStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(MealStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  };

  filterMethod(event) {
    this.foods$
      .subscribe(res => {
        const result = (<any>res).filter(option => option.Food_Name_ITA.includes((event.query).toUpperCase()));
        console.log(result);
        this.options = result;
      });
  }

  addList(rawValue) {
    this.selectedFoodsList.push(rawValue.food)

  }

  onDeleteListItem(item): void {

  }
}

