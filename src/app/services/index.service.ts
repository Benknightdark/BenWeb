import {RequestOptions,Http, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Skillbarchart } from '../shared/skillbarchart';

@Injectable()
export class IndexService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/'
  constructor(private http: Http) { }
  GetskillbarchartData(): Observable<Skillbarchart> {
    return this.http.get(this.Host + 'skillbarchart').map(res => res.json());
  }
}
