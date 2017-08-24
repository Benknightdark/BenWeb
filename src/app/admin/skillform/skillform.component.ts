import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Skillbarchart } from '../../shared/skillbarchart';
import { AngularFireDatabase } from 'angularfire2/database';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.css']
})
export class SkillformComponent implements OnInit {


  skillbarchartdata: Skillbarchart;
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.skillbarchartdata = {
      id: '',
      name: '',
      score: '',
      namecolor: '',
      scorecolor: ''
    };
  }

  onSubmit(f) { console.log(f)
    f.value.id=UUID.UUID();
    f.value.score=f.value.score+"%";
    this.db.object('/skillbarchart/'+f.value.id).set(f.value).then(d=>console.log(d))
  }
}
