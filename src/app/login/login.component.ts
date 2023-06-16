import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
save() {
throw new Error('Method not implemented.');
}
  registrationForm!:FormGroup;
firstName: any;
mobileNo: any;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.createFormStructure();
  }

  createFormStructure() {
    this.registrationForm = this.fb.group({
      "firstName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]{2,10}")]],
      "lastName": ['', [Validators.minLength(2)]],
      "mobileNo": ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      "gender": ['', []],
      "email": ['', []]
    })
  }

}
