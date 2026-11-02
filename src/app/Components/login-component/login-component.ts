import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/Auth/auth-service';
import { UserLoginModel } from '../../Models/user-login-model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router)
  noErrors = true;

  userForLogin: UserLoginModel = {
    Login: "",
    Password: ""
  }

  login() {
    this.authService.login(this.userForLogin).subscribe({
      next: (res) => {
        this.userForLogin.Login = "";
        this.userForLogin.Password = "";
        this.router.navigate(["/home"]);
      },
      error: (res) => {
        this.userForLogin.Login = "";
        this.userForLogin.Password = "";
        this.router.navigate(["/login"]);
      }
    })
  }

  moveToRegistration() {
    this.router.navigate(["/register"])
  }
}
