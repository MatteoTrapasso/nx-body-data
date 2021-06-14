import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MealDaily} from "@models/vo/meal-daily";

@Injectable({
  providedIn: 'root'
})
export class MealDailyService extends BaseCrudService<MealDaily> {
  public service = environment.webServiceUri + 'meal-daily';
  public getId = MealDaily.selectId;

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
  search(value?: ICriteria): Observable<Response<MealDaily[]>> {
    console.log('value: ', value);
    return super.search(value).pipe(
      map(data => {
        return {
          data
        };
      })
    ) as any;
  }

  update(opt: OptRequest<MealDaily>): Observable<Response<MealDaily>> {
    console.log('update: ');
    return super.update(opt);
  }
}
