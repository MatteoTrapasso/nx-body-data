import {Injectable} from '@angular/core';
import {Eat} from '@models/vo/eat';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class EatService extends BaseCrudService<Eat> {
	public service = environment.webServiceUri + 'eat';
}
