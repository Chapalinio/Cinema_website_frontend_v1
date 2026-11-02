import { Component, inject } from '@angular/core';
import { UserRegistrationModel } from '../../Models/user-registration-model';
import { AuthService } from '../../Services/Auth/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-component',
  styleUrl: './register-component.css',
  templateUrl: './register-component.html',
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router)

  userForRegistration: UserRegistrationModel = {
    Login: "",
    Password: "",
    Name: "",
    Surname: "",
    Age: 0
  };

  comfirmPassword: string = "";

  register() {
    this.authService.register(this.userForRegistration).subscribe(register => {
      if (register && this.userForRegistration.Password == this.comfirmPassword) {
        this.router.navigate(["/login"]);
      }
      else {
        this.router.navigate(["/register"]);
      }
    })
  };


  moveToLogin() {
    this.router.navigate(["/login"])
  };
}
