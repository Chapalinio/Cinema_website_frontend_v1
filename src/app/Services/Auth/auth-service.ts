import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UserRegistrationModel } from '../../Models/user-registration-model';
import { UserLoginModel } from '../../Models/user-login-model';
import { Observable } from 'rxjs';

@Service()
export class AuthService {
    API_URL = "http://localhost:5211/api/auth";
    http = inject(HttpClient);

    register(user: UserRegistrationModel): Observable<any> {
        return this.http.post(`${this.API_URL}/register`, user);
    }

    login(user: UserLoginModel): Observable<any> {
        return this.http.post(`${this.API_URL}/login`, user);
    }
}