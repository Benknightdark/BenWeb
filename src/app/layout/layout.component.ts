import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  ScreenWidth = 0;
  constructor() { }

  ngOnInit() {



    Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
      })
      .subscribe(data => {
        this.ScreenWidth = data;
      });
    Observable.fromEvent(window, 'load')
      .map(() => {
        return document.documentElement.clientWidth;
      })
      .subscribe(data => {
        this.ScreenWidth = data;
      });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    $('.collapsible').collapsible({

    });
    $('.button-collapse').sideNav({
      closeOnClick: true,
      draggable: true
    });
    $('.parallax').parallax();
    $('.slider').slider({
      height: 1000,
      indicators: false
    });


  }

}
