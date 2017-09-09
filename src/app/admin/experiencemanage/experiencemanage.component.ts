import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExperienceData } from '../../shared/experience';
import { IndexService } from '../../services/index.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-experiencemanage',
  templateUrl: './experiencemanage.component.html',
  styleUrls: ['./experiencemanage.component.css']
})
export class ExperiencemanageComponent implements OnInit {
  experiencedata: ExperienceData;
  constructor(private http: IndexService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.http.GetDBExperienceData().subscribe(data => {
      this.experiencedata = data;
    })// this.http.GetExperienceData();
  }
  OnValueChange() {
    console.log(this.experiencedata)
    this.db.object('/experiencedata').set(this.experiencedata).then(d => console.log(d));
  }
  OnClickCollectionHeader(detaildata, index) {
    // for (let i = 0; i < detaildata.length; i++) {
    //   if (i != index && detaildata[i].display) {
    //     detaildata[i].display = !detaildata[i].display;
    //   }
    // }
    detaildata[index].display = !detaildata[index].display;
  }

}
