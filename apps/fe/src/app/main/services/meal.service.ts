import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Meal} from "@models/vo/meal";

@Injectable({
  providedIn: 'root'
})
export class MealService extends BaseCrudService<Meal> {
  public service = environment.webServiceUri + 'meal';
  public getId = Meal.selectId;

  /*
    constructor(http: HttpClient) {
      super(http);
    }

    search(value?: ICriteria): Observable<Response<MealData[]>> {
      console.log('value: ', value);
      return this.http.get(this.getUrl(['all']), this.httpOptions()).pipe(
        map(data => {
          return{
            data
          };
        })
      ) as any;
    }*/
  search(value?: ICriteria): Observable<Response<Meal[]>> {
    console.log('value: ', value);
    return super.search(value).pipe(
      map(data => {
        return {
          data
        };
      })
    ) as any;
  }

  update(opt: OptRequest<Meal>): Observable<Response<Meal>> {
    console.log('update: ');
    return super.update(opt);
  }
}
