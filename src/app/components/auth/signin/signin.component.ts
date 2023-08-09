import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user : User = {
    email : '',
    password : ''
  }

  /* formulaire réactif */
    signInForm : FormGroup
    email : FormControl;
    password : FormControl;


  constructor(private fb:FormBuilder){
    this.email = fb.control('', [Validators.email, Validators.required]);
    this.password = fb.control('', [Validators.required, Validators.minLength(6)]);
    this.signInForm = fb.group({
      email : this.email,
      password : this.password
    })
  }

  onSubmit(){
  console.log("ici", this.signInForm)
  }

  /* message d'erreur */
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.email.hasError('email') ? 'Email invalide' : '';
  }
}

