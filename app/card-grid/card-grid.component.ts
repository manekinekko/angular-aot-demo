import { Component } from '@angular/core';
import {TILES} from "../mocks/mock.tiles";
import {Tiles} from "../shared/entities/tiles";

@Component({
  selector: 'card-grid',
  templateUrl: 'card-grid.component.html'
})

export class CardGridComponent{
  tiles: Tiles[] = TILES;

  alert(index, dom) {
    if (index % 6 === 0) return;
    else if (index <= 5) return;

    let l = this.tiles[index % 6];
    let y = Math.floor(index / 6);

    alert(`Avis: ${y}an(s) / ${l.text}`);
  }
}
