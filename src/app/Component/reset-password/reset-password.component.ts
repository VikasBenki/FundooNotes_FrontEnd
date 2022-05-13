import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted=false;
  token:any;

  constructor(private forrmBuilder: FormBuilder, private user: UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.forrmBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);

  }
  OnSubmit(){
    this.submitted=true;
    console.log("inside submit");
    if(this.resetPasswordForm.valid)
    {
      console.log("Valid Data", this.resetPasswordForm.value);
      let data={
        password:this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirmPassword
      }
      this.user.resetPassword(data,this.token).subscribe((res:any)=>{
        console.log(res);
      })
    }
    else{
      console.log("Invalid Data", this.resetPasswordForm.value);
    }
  }

}
