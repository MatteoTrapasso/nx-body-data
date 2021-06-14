import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserStoreActions} from "@root-store/user-store/index";
import {User} from "@models/vo/user";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [``]
})

export class UserEditComponent extends PopUpBaseComponent<User> {

  form: FormGroup; // form

  _id: FormControl; // attributo
  height: FormControl; // attributo
  bDate: FormControl; // attributo
  gender: FormControl; // attributo
  name: FormControl; // attributo
  weight: FormControl; // attributo
  value1 = "M";
  stateOptions = [{label: 'M', value: 'M'}, {label: 'F', value: 'F'}];

  setItemPerform(value: User): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {



    this._id = this.fb.control(this._id, Validators.required);
    this.bDate = this.fb.control('', Validators.required);
    this.height = this.fb.control('', Validators.required);
    this.gender = this.fb.control('', Validators.required);
    this.name = this.fb.control('', Validators.required);
    this.weight = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      _id: this._id,
      bDate: this.bDate,
      height: this.height,
      gender: this.gender,
      name: this.name,
      weight: this.weight
    });
  }

  acceptPerform(item: User): void {
    if (item._id) {
      this.store$.dispatch(UserStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(UserStoreActions.CreateRequest({
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
