// CORE DEPS
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MdModule } from './md.module';
import { RoutesModule } from './routes.module';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/';
import { PersonComponent } from './person/';
import { PeopleComponent } from './people/';
import { UpdateComponent } from './update/';
import {
  CardComponent,
  FormComponent,
  PeopleService,
  NaPipe,
  SfeirBadge
} from './shared/';

@NgModule({
  imports: [
    BrowserModule,
    MdModule,
    HttpModule,
    RoutesModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    PeopleComponent,
    PersonComponent,
    CardComponent,
    FormComponent,
    UpdateComponent,
    PeopleAppComponent,
    NaPipe,
    SfeirBadge
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
