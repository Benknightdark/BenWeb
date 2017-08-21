import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      closeOnClick: true,
      draggable: true
    });
    $('.parallax').parallax();
  }

}
