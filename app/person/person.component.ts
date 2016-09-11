import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/';

@Component({
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: any = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: PeopleService
  ) { }

  ngOnInit() {

    this._route.params
      .map((params: any) => params.id)
      .flatMap(id => this._service.fetchOne(id))
      .subscribe( person => this.person = person);

  }

}
