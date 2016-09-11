import { NgModule } from '@angular/core';

import { Dir } from '@angular2-material/core/rtl/dir';
import { MdButtonToggleModule } from '@angular2-material/button-toggle/button-toggle';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdRadioModule } from '@angular2-material/radio/radio';
import { MdListModule } from '@angular2-material/list/list';
import { MdCardModule } from '@angular2-material/card/card';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdCheckboxModule } from '@angular2-material/checkbox/checkbox';
import { MdProgressCircleModule } from '@angular2-material/progress-circle/progress-circle';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle/slide-toggle';

const MD_MODULES = [
  Dir,
  MdButtonToggleModule,
  MdButtonModule,
  MdSidenavModule,
  MdRadioModule,
  MdListModule,
  MdCardModule,
  MdGridListModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdProgressCircleModule,
  MdSlideToggleModule,
];

@NgModule({
  declarations: MD_MODULES,
  imports: MD_MODULES,
  exports: MD_MODULES
})
export class MdModule {

}
