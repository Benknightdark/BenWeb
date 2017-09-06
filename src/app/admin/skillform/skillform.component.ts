import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Skillbarchart } from '../../shared/skillbarchart';
import { AngularFireDatabase } from 'angularfire2/database';
import { UUID } from 'angular2-uuid';
import { IndexService } from '../../services/index.service';
@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.css']
})
export class SkillformComponent implements OnInit {


  skillbarchartdata: Skillbarchart;
  showform: Boolean = false;
  constructor(private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private index: IndexService
  ) {
  }

  ngOnInit() {
    this.route.url.subscribe(p => {

      switch (p[1].path) {
        case "create":

          this.skillbarchartdata = {
            id: '',
            name: '',
            score: '',
            namecolor: '',
            scorecolor: ''
          };
          this.showform = true;

          break;
        case "detail":

          this.index.GetDBskillbarchartDataByID(p[2].path).subscribe(d => {
           this.skillbarchartdata = d;
           console.log(this.skillbarchartdata)

            this.showform = true;
          });

          break;
        case "edit":
          this.index.GetDBskillbarchartDataByID(p[2].path).subscribe(d => {
            this.skillbarchartdata=d;
            console.log(this.skillbarchartdata)
            this.showform = true;
          });
          break;

        default:
          break;
      }

    });

  }

  onSubmit(f) {
    console.log(f)
    f.value.id = UUID.UUID();
    f.value.score = f.value.score + "%";
    this.db.object('/skillbarchart/' + f.value.id).set(f.value).then(d => console.log(d))
  }
}
