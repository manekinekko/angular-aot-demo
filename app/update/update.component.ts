import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/';

@Component({
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css']
})
export class UpdateComponent implements OnInit {

  person: any = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    postalCode: '',
    phone: '',
    isManager: false
  };

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

  submit(person: any) {
    this._service.update(person).subscribe(
      res => this._router.navigate(['/people'])
    );
  }

  cancel() {
    this._router.navigate(['/people']);
  }

}
