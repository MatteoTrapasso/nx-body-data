import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EatStoreActions} from "@root-store/eat-store/index";
import {Eat} from "@models/vo/eat";


@Component({
  selector: 'app-eat-edit',
  templateUrl: './eat-edit.component.html',
  styles: [``]
})
export class EatEditComponent extends PopUpBaseComponent<Eat> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  kcal: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo

  setItemPerform(value: Eat): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {

    const date = new Date();


    this.kcal = this.fb.control('', Validators.required);
    this.date = this.fb.control({value: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(), disabled: true});

    this.form = this.fb.group({ // form
      kcal: this.kcal, // attributo
      date: this.date, // attributo
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
