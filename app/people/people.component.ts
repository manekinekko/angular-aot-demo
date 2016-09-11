import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../shared/';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

  dialogStatus = 'inactive';
  people: any[] = [];
  view = 'card';

  constructor(
    private _router: Router,
    private _service: PeopleService
  ) { }

  ngOnInit() {
    this._service.fetch().subscribe((people) => {
      this.people = people;
    });
  }

  delete(person: any) {
    this._service.delete(person.id)
      .subscribe((people) => {
        this.people = people;
      }
    );
  }

  add(person: any) {
    this._service.create(person)
      .flatMap( _ => this._service.fetch() )
      .subscribe( people => {
        this.people = people;
        this.hideDialog();
      })
  }

  showDialog() {
    this.dialogStatus = 'active';
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
  }

  switchView() {
    this.view = (this.view === 'card') ? 'list' : 'card';
  }

  navigate(person: any) {
    this._router.navigate(['/person', person.id]);
  }

}
