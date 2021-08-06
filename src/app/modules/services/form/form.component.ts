import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup
  @Input() interestedArray: any;
  constructor( public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.interestedArray);
    this.form = this.formBuilder
    .group({
      firstName: [null, [Validators.required, Validators.email]],
      lastName: [null, [Validators.required, Validators.email]],
      email: [null, [Validators.required, Validators.email]],
      mobileNumber: [null, [Validators.required, Validators.email]],
      interestedIn: [null, [Validators.required]],
      numberOfPersons: [null, [Validators.required]],
    })
  }

  save(){
    console.log(this.form.getRawValue());
    
  }

}
