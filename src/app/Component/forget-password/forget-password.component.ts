import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpaswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder,private user :UserService) { }

  ngOnInit(): void {
    this.forgetpaswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }
  OnSubmit(){
    console.log("inside submit");
    if(this.forgetpaswordForm.valid)
    {
      console.log("valid data", this.forgetpaswordForm.value);
      let data={
        email:this.forgetpaswordForm.value.email,
      }
      this.user.forgetPassword(data).subscribe((res:any)=>
      {
        console.log(res);
      });
    }
    else{
      console.log("invalid data", this.forgetpaswordForm.value)
    }
  }

}
