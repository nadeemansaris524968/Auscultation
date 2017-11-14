import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParentService {

  constructor(private url:string, private http: Http) { }

  dummyInfo = [ 
    { id: 1, name: 'name1'},
    { id: 2, name: 'name2'},
    { id: 3, name: 'name3'},
    { id: 4, name: 'name4'},
  ]

  post(resource){
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => console.log(response.text.toString()))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
        return Observable.throw(error);

    if (error.status === 404)
        return Observable.throw(error);

    return Observable.throw(error);
}
}
