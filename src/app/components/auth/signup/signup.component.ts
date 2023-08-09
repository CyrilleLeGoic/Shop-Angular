import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    confirmPassword : ''
  }

  signUpForm : FormGroup;
  firstname : FormControl;
  lastname : FormControl;
  email : FormControl;
  password : FormControl;
  confirmPassword : FormControl;

  constructor(private fb:FormBuilder){
    this.firstname = fb.control('', [Validators.minLength(3), Validators.required]);
    this.lastname = fb.control('', [Validators.minLength(3), Validators.required]);
    this.email = fb.control('', [Validators.email, Validators.required]);
    this.password = fb.control('', [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = fb.control('', [Validators.required]);

    this.signUpForm = fb.group({
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
      password : this.password,
      confirmPassword : this.confirmPassword
    })
  }

  passwordsMatch(): boolean {
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = this.signUpForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

  ngOnInit(): void {}

  onSubmit(){console.log(this.user);}
}
