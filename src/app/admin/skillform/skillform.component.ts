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
  Disable: Boolean = false;
  RouteName: String;
  RouteParm: String;
  constructor(private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private index: IndexService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.url.subscribe(p => {
      console.log(p)
      this.RouteName = p[1].path;
      if (p.length > 2) {
        this.RouteParm = p[2].path;
      }
      // this.RouteName = p[1].path;

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
          this.Disable = false;

          break;
        case "detail":

          this.index.GetDBskillbarchartDataByID(this.RouteParm).subscribe(d => {
            this.skillbarchartdata = d;
            this.Disable = true;
            console.log(this.skillbarchartdata)
            this.showform = true;
          });

          break;
        case "edit":
          this.index.GetDBskillbarchartDataByID(this.RouteParm).subscribe(d => {
            this.skillbarchartdata = d;
            console.log(this.skillbarchartdata)
            this.showform = true;
            this.Disable = false;
          });
          break;

        default:
          break;
      }

    });

  }

  onSubmit(f) {
    //console.log(f)

    // f.value.score = f.value.score + "%";
    if (this.RouteName == 'create') {
      f.value.id = UUID.UUID();
      this.db.object('/skillbarchart/' + f.value.id).set(f.value).then(d => console.log(d));
    }
    if (this.RouteName == 'edit') {
      this.db.object('/skillbarchart/' + this.RouteParm).update(f.value).then(d => console.log(d));
    }
    this.router.navigate(["admin/skillmanage"])

  }
}
