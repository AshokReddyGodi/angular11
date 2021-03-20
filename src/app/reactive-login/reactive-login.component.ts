import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {
  title = 'Login Form';

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  _formValidate() {
    // Here we have used a form builder and an array to allow for multiple validation rules on a form.
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  // To initialize the form group and validations in the 'ngOnInit' lifecycle hook.
  ngOnInit() {
    this._formValidate();
  }

  // To show how developers can access the form control values.
  _formSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.getRawValue()));
  }
}