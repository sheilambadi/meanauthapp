import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //properties
  name: string;
  username: string;
  email: string;
  password: string;

  //inject services to constructor
  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    //user object to be submitted
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //required fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Input all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Input a valid email address', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
