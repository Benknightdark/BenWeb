import { Component, OnInit } from '@angular/core';
import { Skillbarchart } from '../../shared/skillbarchart';

@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.css']
})
export class SkillformComponent implements OnInit {


  skillbarchartdata: Skillbarchart;
  constructor() {
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
  onchange(event) {
    console.log(event);
  }
  onSubmit(f) { }
}
