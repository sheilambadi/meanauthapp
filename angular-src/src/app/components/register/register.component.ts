import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

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
  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private authService:AuthService,
    private router: Router
  ) { }

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

    //validate emai
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Input a valid email address', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered successfully and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    })
  }

}
