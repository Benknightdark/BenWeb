import { Component, OnInit, NgZone } from '@angular/core';
import { IndexService } from '../services/index.service';
import { ExperienceData } from '../shared/experience';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencedata: Observable<ExperienceData>;
  constructor(private http: IndexService) { }

  ngOnInit() {

      this.experiencedata =this.http.GetDBExperienceData()// this.http.GetExperienceData();


    this.http.GetDBExperienceData().subscribe(data=>console.log(data))
    this.http.GetExperienceData().subscribe(data=>console.log(data));
  }

}
