import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpaswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.forgetpaswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }
  OnSubmit(){

  }

}
