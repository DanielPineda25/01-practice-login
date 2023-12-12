import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationService } from '../../services/validation.service';

import { LoginComponent } from '../../components/login/login.component';
import { SuccesfullPageComponent } from '../succesfull-page/succesfull-page.component';

@Component({
  selector: 'shared-login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SuccesfullPageComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {

  constructor (public validationService: ValidationService){}

  public user:string = '';
  public pass:string = '';

  public showLogin: boolean = true;
  public errorMsj: boolean = false;

  userInput (userInput: string): string {

    this.user = userInput;
    return userInput

  }

  passInput (passInput: string): string{

    this.pass = passInput;
    return passInput

  }

  userValidation(event: Event):void{

    event.preventDefault();
    this.validationService.validationUser(this.user, this.pass);
    this.showLogin = !this.validationService.isLoggedIn;
    this.errorMsj = !this.validationService.errorAcces;

  }

}


