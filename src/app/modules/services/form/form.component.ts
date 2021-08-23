import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { APIService } from 'src/app/commonServices/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup
  @Input() interestedArray: any;
  loading: boolean = false;
  constructor( public formBuilder: FormBuilder,private snackBar: MatSnackBar, private apiService : APIService) { }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  ngOnInit(): void {
    console.log(this.interestedArray);
    this.form = this.formBuilder
    .group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobileNumber: [null, [Validators.required]],
      interestedIn: [null, [Validators.required]],
      numberOfPersons: [null, [Validators.required]],
    })
  }

  save(){
    this.loading = true;
    Object.values(this.form.controls)
      .forEach((control: FormControl) => {
        control.markAsTouched()
        control.updateValueAndValidity()
      });
      if (this.form.invalid) {
        this.loading = false;
        this.snackBar.open('Please complete the form before submitting','ok');
        return
      }
    this.apiService.sendEnquiry(this.form.getRawValue()).subscribe(
      data=>{ 
        this.loading = false;
        if(data.status == 'success'){
          this.snackBar.open(data.message,'Ok');
          this.form.reset();
        }
        else 
          this.snackBar.open("Something Went Wrong",'Ok');
      }
    )
  }

}
