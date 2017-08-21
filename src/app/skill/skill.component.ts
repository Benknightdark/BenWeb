import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }
  @Input() ScreenWidth;
  ngOnInit() {
    $('.skillbar').each(function () {
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 5000);
    });
  }

}
