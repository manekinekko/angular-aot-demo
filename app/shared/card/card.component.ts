import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfeir-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  @Input('expand') isExpanded: boolean = false;
  @Input() person: any = {};
  @Output('onPersonDelete') delete$: EventEmitter<any>;

  constructor() {
    this.delete$ = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  delete(person: any) {
    this.delete$.emit(person);
  }

}
