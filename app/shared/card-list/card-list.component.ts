import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.component.html'
})

export class CardListComponent {
  @Input('title') title:string;
  @Input('questions') questions: Object[];
}
