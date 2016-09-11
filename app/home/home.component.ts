import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../person/';
import { PeopleService } from '../shared/';

@Component({
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public person: any = {};

  constructor(
    private _service: PeopleService
  ) {
  }

  ngOnInit() {
    this.random();
  }

  random() {
    this._service.fetchRandom()
      .subscribe((person) => this.person = person);
  }

}
