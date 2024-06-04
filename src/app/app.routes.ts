import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {authGuard} from "./shared/services/guards/auth.guard";
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,

    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '**',
        pathMatch: "full",
        redirectTo: 'home'
    }
];
