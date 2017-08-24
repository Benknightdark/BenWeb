import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class LoginService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  Login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(a => {
        if (a.uid) {
          localStorage.setItem("token", a.uid)
          this.router.navigate(["/admin"])
        } else {
          confirm(a.message)
        }
      }

      )
      .catch(err => confirm(err.message));
  }
  Logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem("token")
    this.router.navigate(["/"])

  }

}
