import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/';
import { PeopleComponent } from './people/';
import { PersonComponent } from './person/';
import { UpdateComponent } from './update/';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: 'edit/:id', component: UpdateComponent},
];

export const RoutesModule = RouterModule.forRoot(ROUTES, {useHash: true});
