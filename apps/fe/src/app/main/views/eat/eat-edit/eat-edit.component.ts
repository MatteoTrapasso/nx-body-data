import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EatStoreActions} from "@root-store/eat-store/index";
import {Eat} from "@models/vo/eat";
import {getBaseDate} from "@core/utils/date-utils";
import {Observable} from "rxjs";
import {FoodStoreSelectors} from "@root-store/food-store/index";
import {Food} from "@models/vo/food";


@Component({
  selector: 'app-eat-edit',
  templateUrl: './eat-edit.component.html',
  styleUrls: [`./eat-edit.component.scss`]
})
export class EatEditComponent extends PopUpBaseComponent<Eat> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo
  type: FormControl;
  food: FormControl;
  time: FormControl;
  data: any;
  foods$: Observable<Food[]>;
  selectedFoods: Food[];
  selectedType: any;
  types: any[] = [
    {name: 'colazione', value: 'colazione'},
    {name: 'pranzo', value: 'pranzo'},
    {name: 'cena', value: 'cena'},
    {name: 'spuntino', value: 'spuntino'}
  ];
  options: any;


  setItemPerform(value: Eat): void {
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
          data: [300, 50, 100],
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

  acceptPerform(item: Eat): void {
    if (item._id) {
      this.store$.dispatch(EatStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(EatStoreActions.CreateRequest({
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

}
