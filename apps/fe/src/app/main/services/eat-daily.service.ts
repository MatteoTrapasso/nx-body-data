import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EatDaily} from "@models/vo/eat-daily";

@Injectable({
  providedIn: 'root'
})
export class EatDailyService extends BaseCrudService<EatDaily> {
  public service = environment.webServiceUri + 'eat-daily';
  public getId = EatDaily.selectId;

  /*
    constructor(http: HttpClient) {
      super(http);
    }

    search(value?: ICriteria): Observable<Response<EatData[]>> {
      console.log('value: ', value);
      return this.http.get(this.getUrl(['all']), this.httpOptions()).pipe(
        map(data => {
          return{
            data
          };
        })
      ) as any;
    }*/
  search(value?: ICriteria): Observable<Response<EatDaily[]>> {
    console.log('value: ', value);
    return super.search(value).pipe(
      map(data => {
        return {
          data
        };
      })
    ) as any;
  }

  update(opt: OptRequest<EatDaily>): Observable<Response<EatDaily>> {
    console.log('update: ');
    return super.update(opt);
  }
}
