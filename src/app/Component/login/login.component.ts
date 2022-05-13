import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit(){
    console.log("inside submit");
    if(this.loginForm.valid)
    {
      console.log("valid Data", this.loginForm.value);
      let data ={
        email: this.loginForm.value.email,       
        password: this.loginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{
        console.log(res)
      })
    }
    else
    {
      console.log("invalid data", this.loginForm.value)
    }

  }

}
