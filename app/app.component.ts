import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import {GLEVELS} from "./mocks/mock.gLevels";
import {TLEVELS} from "./mocks/mock.tLevels";
import {FirebaseAuthService} from "./shared/services/firebase-auth.service";
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  private user:any;
  private tryLogin: boolean = false;
  gLevels:Object[];
  tLevels:Object[];

  @ViewChild('sidenav') sidenav;

  constructor(private firebaseAuthService:FirebaseAuthService,
              private af:AngularFire,
              private zone:NgZone) {
    this.gLevels = GLEVELS;
    this.tLevels = TLEVELS;
    this.tryLogin = this.isSessionActive();
  }

  ngOnInit() {
    this.af.auth.subscribe(
      (user) => {
        console.log('af.auth.subscribe', user);
        this.zone.run(() => this.user = user);
      }
    );
  }
  isSessionActive() {
    return (localStorage.key(0) || '').startsWith('firebase');
  }

  onLogin() {
    this.firebaseAuthService.firebaseLogin();
  }

  onLogout() {
    this.firebaseAuthService.firebaseLogout();
    this.sidenav.close();
    setTimeout(() => this.tryLogin = this.isSessionActive(), 10);
  }
}
