import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Skillbarchart } from '../shared/skillbarchart';
import { ExperienceData } from '../shared/experience';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class IndexService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/'
  constructor(private http: Http, private db: AngularFireDatabase) { }
  GetskillbarchartData(): Observable<Skillbarchart> {
    return this.http.get(this.Host + 'skillbarchart').map(res => res.json());
  }
  GetExperienceData(): Observable<ExperienceData> {
    return this.http.get(this.Host + 'experiencedata').map(res => res.json());
  }
  GetDBExperienceData(): Observable<ExperienceData> {
    return this.db.list('/experiencedata').share();
  }
  GetDBskillbarchartDataByID(id: String): Observable<Skillbarchart> {
    return this.db.object('/skillbarchart/' + id).share();
  }
  DeleteDBskillbarchartDataByID(id: String) {
    this.db.object('/skillbarchart/' + id).remove().then(a => console.log(a)).catch(e => console.log(e));
  }
  GetDBskillbarchartData(): Observable<Skillbarchart> {
    return this.db.list('/skillbarchart').share();
  }
}
