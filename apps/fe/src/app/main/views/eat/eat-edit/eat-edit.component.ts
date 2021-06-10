import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {EatStoreActions} from "@root-store/eat-store/index";
import {Eat} from "@models/vo/eat";
import {getBaseDate} from "@core/utils/date-utils";


@Component({
  selector: 'app-eat-edit',
  templateUrl: './eat-edit.component.html',
  styleUrls: [`./eat-edit.component.scss`]
})
export class EatEditComponent extends PopUpBaseComponent<Eat> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  kcal: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo
  type: FormControl;
  selectedType: any = null;

  types: any[] = [
    {name: 'colazione', value: 'colazione'},
    {name: 'pranzo', value: 'pranzo'},
    {name: 'cena', value: 'cena'},
    {name: 'spuntino', value: 'spuntino'}
  ];


  setItemPerform(value: Eat): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {

    const date = new Date();


    this._id = this.fb.control(this._id, Validators.required);
   // this.kcal = this.fb.control('', Validators.required);
    this.date = this.fb.control({value: getBaseDate(date), disabled: true});
    this.type = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      _id: this._id, // attributo
      kcal: this.kcal, // attributo
      date: this.date, // attributo
      type: this.type, // attributo
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
  }

}
