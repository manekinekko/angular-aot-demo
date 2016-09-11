import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GoogleSigningComponent } from './google-signing/google-signing.component'
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { CandidatesService } from './candidate-list/candidates.service.ts';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CardListComponent } from './shared/card-list/card-list.component.ts';
import { CardGridComponent } from './card-grid/card-grid.component';
import { FirebaseAuthService } from './shared/services/firebase-auth.service';
import { AppComponent } from './app.component';
import { MdModule } from './md.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyBEVqu5XFYgIKsJ5N63d6VTZIOEdsqwqWg',
  authDomain: 'sfeir-playoffs-beta.firebaseapp.com',
  databaseURL: 'https://sfeir-playoffs-beta.firebaseio.com',
  storageBucket: 'sfeir-playoffs-beta.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigningComponent,
    CandidateListComponent,
    CardListComponent,
    CardGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule,

    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    CandidatesService,
    FirebaseAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
