import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {BodyData} from '@models/vo/body-data';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BodyDataStoreActions} from '@root-store/body-data-store';
import {getBaseDate} from "@core/utils/date-utils";


@Component({
  selector: 'app-body-data-edit',
  templateUrl: './body-data-edit.component.html',
  styles: [``]
})
export class BodyDataEditComponent extends PopUpBaseComponent<BodyData> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  height: FormControl; // attributo
  weight: FormControl; // attributo
  date: FormControl; // attributo
  user: FormControl; // attributo
  bDate: FormControl; // attributo
  gender: FormControl; // attributo
  value1 = "M";
  stateOptions = [{label: 'M', value: 'M'}, {label: 'F', value: 'F'}];


  setItemPerform(value: BodyData): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    const date = new Date();

    this._id = this.fb.control(this._id);
    this.height = this.fb.control('', Validators.required);
    this.weight = this.fb.control('', Validators.required);
    this.bDate = this.fb.control('', Validators.required);
    this.gender = this.fb.control('', Validators.required);
    this.date = this.fb.control({
      value: getBaseDate(date),
      disabled: true
    });

    this.form = this.fb.group({ // form
      _id: this._id, // attributo
      height: this.height, // attributo
      weight: this.weight, // attributo
      date: this.date, // attributo
      bDate: this.bDate, // attributo
      gender: this.gender, // attributo
    });
  }

  acceptPerform(item: BodyData): void {
    if (item._id) {
      this.store$.dispatch(BodyDataStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(BodyDataStoreActions.CreateRequest({
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
