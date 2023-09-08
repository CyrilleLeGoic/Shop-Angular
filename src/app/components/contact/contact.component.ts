import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEmail } from 'src/app/models/userEmail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  userEmail : UserEmail = {
    name : '',
    email : '',
    phone : '',
    subject : '',
    message : ''
  }

  formMessage : FormGroup
  name : FormControl;
  email : FormControl;
  phone : FormControl;
  subject : FormControl;
  message : FormControl;


  constructor(private fb : FormBuilder) {
    this.name = fb.control('', [Validators.required, Validators.minLength(3)]);

    this.email = fb.control('', [Validators.email, Validators.required]);

    this.phone = fb.control('', [Validators.required, Validators.minLength(10)]);

    this.subject = fb.control('', [Validators.required, Validators.minLength(15)]);

    this.message = fb.control('', [Validators.required, Validators.minLength(30)]);

    this.formMessage = fb.group({
      name : this.name,
      email : this.email,
      phone : this.phone,
      subject : this.subject,
      message : this.message
    })
  }

  onSubmit(){
    console.log("ici", this.formMessage)
  }

  /* message d'erreur */
  getErrorMessage(){
    if(this.name.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.name.hasError('name') ? 'Nom invalide, 3 lettres minimum' : '';
  }

  getErrorMessageEmail(){
    if(this.email.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.email.hasError('email') ? "Le format de l'email est invalide" : '';
  }

  getErrorMessagePhone(){
    if(this.phone.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.phone.hasError('phone') ? 'Téléphone invalide' : '';
  }

  getErrorMessageSubject(){
    if(this.subject.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.subject.hasError('subject') ? 'Sujet invalide' : '';
  }

  getErrorMessageMessage(){
    if(this.message.hasError('required')){
      return 'Vous devez entrer une valeur';
    }
    return this.message.hasError('message') ? 'Vous devez entrer 10 caractères minimum' : '';
  }

}
