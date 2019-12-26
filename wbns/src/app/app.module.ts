import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { routingArr } from './app.routing';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { MatInputModule,MatTableModule,MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignupDisplayComponent,
    UserLoginComponent,
    PagenotfoundComponent,
    HomepageComponent,
    ViewmoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    routingArr,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
MatInputModule,
HttpClientModule,
MatDialogModule,
    FormsModule,
    ReactiveFormsModule

  ],
  entryComponents:[
    ViewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
