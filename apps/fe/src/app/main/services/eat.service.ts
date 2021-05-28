import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Eat} from "@models/vo/eat";

@Injectable({
  providedIn: 'root'
})
export class EatService extends BaseCrudService<Eat> {
  public service = environment.webServiceUri + 'eat';
  public getId = Eat.selectId;

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
  search(value?: ICriteria): Observable<Response<Eat[]>> {
    console.log('value: ', value);
    return super.search(value).pipe(
      map(data => {
        return {
          data
        };
      })
    ) as any;
  }

  update(opt: OptRequest<Eat>): Observable<Response<Eat>> {
    console.log('update: ');
    return super.update(opt);
  }
}
