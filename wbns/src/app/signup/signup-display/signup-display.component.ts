import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SignupsService } from '../signups.service';

@Component({
  selector: 'app-signup-display',
  templateUrl: './signup-display.component.html',
  styleUrls: ['./signup-display.component.css']
})
export class SignupDisplayComponent implements OnInit {
  signUpForm:FormGroup;
  constructor(private _signup:SignupsService) { }

  ngOnInit()
   {
    this.signUpForm=new FormGroup({
      user_email:new FormControl(null,[Validators.required,Validators.email]),

      password_group:new FormGroup({
        user_password:new FormControl(null,Validators.required),
        user_confirm_password:new FormControl(null)

      },[this.passwordmatch.bind(this)]),
      user_type:new FormControl('visitor'),
      customer_name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z]*')]),
      customer_address:new FormControl(null),
      customer_mobileno:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')])
    });
   }
   onSignUp()
   {
    console.log(this.signUpForm.value.password_group.user_password);
    let userobj={
      user_email:this.signUpForm.value.user_email,
      user_password:this.signUpForm.value.password_group.user_password,
      user_type:this.signUpForm.value.user_type
    };
    let customerobj = {
      customer_name: this.signUpForm.value.customer_name,
      customer_address: this.signUpForm.value.customer_address,
      customer_mobileno: this.signUpForm.value.customer_mobileno,
      fk_user_email: this.signUpForm.value.user_email
    };
    console.log(userobj)
    this._signup.signUp(userobj).subscribe(
      (x:any)=>{
        console.log(x);
        this._signup.customerAdd(customerobj).subscribe(
          (y:any)=>{
            console.log(y);
            alert('done');
          }
          );
      }
    );
   }
   passwordmatch(c:AbstractControl):{[s:string]:boolean}
   {
    const pass=c.get('user_password').value;
    const cpass=c.get('user_confirm_password').value;
    if(pass!=cpass)
    {
      return {'PasswordMatch':true};
    }
    return null;

   }
}
