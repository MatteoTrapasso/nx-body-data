import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MealStoreActions} from "@root-store/meal-store/index";
import {Meal, MenuItem} from "@models/vo/meal";
import {Observable} from "rxjs";
import {FoodStoreSelectors} from "@root-store/food-store/index";
import {Food} from "@models/vo/food";


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
  time: FormControl;
  foods$: Observable<Food[]>;
  types: string[] = ["colazione", "pranzo", "cena", "spuntino"];
  data: any;
  selectedType: any;
  options: any;

  /* totFat: number; //sum of (Total_fat/100) * gty selected foods
   totProtein: number;//sum of (Total_protein/100) * qty selected foods
   totCarb: number;//sum of (Available_carbohydrates_MSE/100) * qty selected foods
   totKcal: number;//sum of (Energy_Rec_with_fibre/100) * qty selected foods*/

  setItemPerform(value: Meal): void {
    this.makeFrom();
    this.form.reset(value);
    value.menu.forEach(value1 => { /*value.menu=undefined!!!!!!!!!!!!!*/
      this.addMenu(value1)
    })
  }

  makeFrom(): void {
    this.foods$ = this.store$.select(
      FoodStoreSelectors.selectAll
    );


    this.data = {
      labels: ['Protein', 'Carbohydrates', 'Fat'],
      datasets: [
        {
          data: [1, 1, 1],
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


    this._id = this.fb.control(this._id, Validators.required);
    this.date = this.fb.control({value: '', disabled: true});
    this.type = this.fb.control('', Validators.required);
    this.time = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      _id: this._id, // attributo
      date: this.date, // attributo
      type: this.type, // attributo
      time: this.time, // attributo
      menu: this.fb.array([])
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
        this.options = result;
      });
  }

  addMenu(item: MenuItem = new MenuItem()) {
    const foodForm = this.fb.group({
      food: [item.food, Validators.required],
      qty: [item.qty, Validators.required]
    });

    this.menu.push(foodForm);
  }

  get menu() {
    return this.form.controls["menu"] as FormArray;
  }

  deleteFood(foodIndex: number) {
    this.menu.removeAt(foodIndex);
  }
}

