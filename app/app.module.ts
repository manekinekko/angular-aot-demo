import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AvatarComponent }  from './avatar';
import { FxService }  from './shared';

export function WebAudioFactory() { return new ((<any>window).AudioContext || (<any>window).webkitAudioContext)() };

// not working in AOT mode!!
// export const CellCount = () => Array(9).fill(0);
export function CellCount() { return [0,0,0,0,0,0,0,0,0] };

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AvatarComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
    {
      provide: 'FxService', useClass: FxService
    },
    {
      provide: 'CELLS',    useValue: CellCount
    },
    {
      provide: 'INTERVAL', useValue: 1000
    },
    {
      provide: 'TIMER',    useValue: 1500
    },
    {
      provide: 'AudioContext',
      useFactory: WebAudioFactory
    }
  ]
})
export class AppModule { }
