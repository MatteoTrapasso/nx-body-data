import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EatDaily} from "@models/vo/eat-daily";
import {EatDailyStoreActions} from "@root-store/eat-daily-store/index";


@Component({
  selector: 'app-eat-edit-daily',
  templateUrl: './eat-daily-edit.component.html',
  styles: [``]
})
export class EatDailyEditComponent extends PopUpBaseComponent<EatDaily> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  kcal: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo

  setItemPerform(value: EatDaily): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {

    const date = new Date();


    this._id = this.fb.control(this._id, Validators.required);
    this.kcal = this.fb.control('', Validators.required);
    this.date = this.fb.control({value: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(), disabled: true});

    this.form = this.fb.group({ // form
      _id: this._id, // attributo
      kcal: this.kcal, // attributo
      date: this.date, // attributo
    });
  }

  acceptPerform(item: EatDaily): void {
    if (item._id) {
      this.store$.dispatch(EatDailyStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(EatDailyStoreActions.CreateRequest({
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
