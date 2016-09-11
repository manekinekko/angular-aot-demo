import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFire } from "angularfire2/angularfire2";

@Component({
  selector: 'google-signing',
  templateUrl: 'google-signing.component.html',
  styleUrls: ['google-signing.component.css'],
})

export class GoogleSigningComponent {
  @Output() onLogin: EventEmitter<string>;

  private tryLogin:boolean = false;

  constructor(private af:AngularFire) {
    this.tryLogin = this.isSessionActive();
    this.onLogin = new EventEmitter<string>();
  }

  isSessionActive() {
    return (localStorage.key(0) || '').startsWith('firebase');
  }

  firebaseLogin() {
    this.onLogin.emit("rer");
  }
}
