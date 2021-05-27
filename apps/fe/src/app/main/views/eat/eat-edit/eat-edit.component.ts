import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Eat} from '@models/vo/eat';
import {FormGroup} from '@angular/forms';
import {EatStoreActions} from '@root-store/eat-store';


@Component({
  selector: 'app-eat-edit',
  templateUrl: './eat-edit.component.html',
  styles: [``]
})
export class EatEditComponent extends PopUpBaseComponent<Eat> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Eat): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Eat): void {
    if (item.id) {
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

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}
