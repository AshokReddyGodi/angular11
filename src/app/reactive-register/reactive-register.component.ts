import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Passwordmatch } from './Passwordvalidation';
@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  title = 'Register Form';

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  _formValidate() {
    // Here we have used a form builder and an array to allow for multiple validation rules on a form.
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      cnfPwd: ['', Validators.required]
    }, {
        validator: Passwordmatch.matchPassword
      });
  }

  ngOnInit() {
    this._formValidate();
  }

  _formSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.getRawValue()));
  }
}