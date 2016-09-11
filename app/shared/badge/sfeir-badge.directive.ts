import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[sfeir-badge]'
})
export class SfeirBadge {

  @Input() person: any;

  constructor(
    private _el: ElementRef,
    private _rd: Renderer
  ) { }

  ngOnInit() {

    if(this.person && this.person.isManager) {
      let badge = '<i class="material-icons">supervisor_account</i>';
      this._rd.setElementProperty(this._el.nativeElement, 'innerHTML', badge);
    }
  }

}
