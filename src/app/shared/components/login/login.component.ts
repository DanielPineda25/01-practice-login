import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'shared-login',
  standalone: true,
  imports: [

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output()
  public onUser = new EventEmitter<string>();

  @Output()
  public onPass = new EventEmitter<string>();

  emitUser( user: string, pass: string ): void{

      this.onUser.emit( user );
      this.onPass.emit( pass );

  }

}
