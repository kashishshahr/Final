import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _route: Router, private _login: LoginsService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      user_email: new FormControl(null, [Validators.required, Validators.email]),
      user_password: new FormControl(null, [Validators.required])
    });

  }
  onLogin() {
    this._login.login(this.loginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.length == 1) {
          alert('valid');
        }
        else {
          alert('invalid');

        }
      }
    );
  }
}
