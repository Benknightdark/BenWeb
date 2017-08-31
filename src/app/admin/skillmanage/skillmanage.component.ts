import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';
import { Skillbarchart } from '../../shared/skillbarchart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skillmanage',
  templateUrl: './skillmanage.component.html',
  styleUrls: ['./skillmanage.component.css']
})
export class SkillmanageComponent implements OnInit {
  chartdata: Observable<Skillbarchart>;
  constructor(private service: IndexService) { }


  ngOnInit() {
    this.chartdata = this.service.GetDBskillbarchartData()
  }

}
