import { Component, OnInit, Input } from '@angular/core';
import { IndexService } from '../services/index.service';
import { Skillbarchart } from '../shared/skillbarchart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private http: IndexService) { }
  @Input() ScreenWidth;
  chartdata: Observable<Skillbarchart>;
  ngOnInit() {
    this.chartdata = this.http.GetDBskillbarchartData()//.GetskillbarchartData();


  }
}
