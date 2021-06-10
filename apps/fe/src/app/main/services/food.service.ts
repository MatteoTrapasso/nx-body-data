import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Food} from "@models/vo/food";

@Injectable({
  providedIn: 'root'
})
export class FoodService extends BaseCrudService<Food> {
  public service = environment.webServiceUri + 'food';
  public getId = Food.selectId;

  /*
    constructor(http: HttpClient) {
      super(http);
    }

    search(value?: ICriteria): Observable<Response<FoodData[]>> {
      console.log('value: ', value);
      return this.http.get(this.getUrl(['all']), this.httpOptions()).pipe(
        map(data => {
          return{
            data
          };
        })
      ) as any;
    }*/
  search(value?: ICriteria): Observable<Response<Food[]>> {
    console.log('value: ', value);
    return super.search(value).pipe(
      map(data => {
        return {
          data
        };
      })
    ) as any;
  }

  update(opt: OptRequest<Food>): Observable<Response<Food>> {
    console.log('update: ');
    return super.update(opt);
  }
}
