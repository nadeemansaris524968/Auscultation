import { ParentService } from './parent.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ChildService extends ParentService{

  constructor(http:Http){
    super('http://devbox03.almaden.ibm.com:9080/DeepEyesServlets/rest/deepEyesServlet/runPipeline', http);
  }

}
