import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
const arr:Routes=[
  {path:'',component:UserLoginComponent},
  {path:'loginDisplay',component:UserLoginComponent},
  {path:'signupDisplay',component:SignupDisplayComponent},
  {path:'HomePage',component:HomepageComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];
export const routingArr=RouterModule.forRoot(arr);
