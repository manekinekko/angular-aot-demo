import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseAuthService {
  constructor(private af:AngularFire) {
    //this.candidats = af.database.list('/candidats');
  }

  firebaseLogin() {
    this.af.auth.login();
  }

  firebaseLogout() {
    this.af.auth.logout();
  }
}
