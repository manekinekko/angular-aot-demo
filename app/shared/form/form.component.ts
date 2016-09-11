import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  public isUpdateMode: boolean = false;

  @Input() model:any = {};
  @Output('onCancel') cancel$: EventEmitter<any>;
  @Output('onSubmit') submit$: EventEmitter<any>;

  form: FormGroup;

  constructor() {
    this.submit$ = new EventEmitter<any>();
    this.cancel$ = new EventEmitter<any>();
    this.form = this._buildForm();
  }

  ngOnInit() {
  }

  ngOnChanges(record: any) {
    if(record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = !!this.model;
      this.form.patchValue(this.model);
    }
  }

  cancel() {
    this.cancel$.emit();
  }

  submit(person: any) {
    this.submit$.emit(person);
  }

  private _buildForm() {
    return new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, CustomValidators.sfeirEmail
      ])),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      street: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl(''),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('\\d{10}')
      ])),
      isManager: new FormControl('')
    });
  }

}
