import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.css']
})
export class SkillformComponent implements OnInit {

  color
  constructor() {
  }

  ngOnInit() {
  }
  onchange(event){
    console.log(event)
  }
}
