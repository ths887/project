import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators}from '@angular/forms';
import { passValidator }from  './validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(8)]],
      password: '',
      conformpassword:[ '', passValidator]
    });
    this.form.controls.password.valueChanges.subscribe(
      x => this.form.controls.conformpassword.updateValueAndValidity()
    )
   }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.form.controls.zip);
    this.form.markAsTouched();
  }
}
