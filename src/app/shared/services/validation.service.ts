import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ValidationService {

  constructor() { }

  private  user: string = 'danielpineda@correo.co';
  private pass:string = 'Contraseña911';

  public isLoggedIn: boolean = false;
  public errorAcces: boolean = true;

  validationUser(userInput:string , passInput:string):void {

    if(userInput === this.user && passInput === this.pass){

      this.isLoggedIn = true;
      this.errorAcces = true;

    }
    else {

      this.isLoggedIn = false;
      this.errorAcces = false;

    }

  }

}
