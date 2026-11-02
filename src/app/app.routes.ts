import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register-component/register-component';
import { LoginComponent } from './Components/login-component/login-component';
import { HomeComponent } from './Components/home-component/home-component';
import { AddFilmComponent } from './Components/add-film-component/add-film-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "add-film", component: AddFilmComponent }
];