import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
	private anyErrors: any;
  private userName: string;
  authstate: any;


  constructor(public navCtrl: NavController, private fb: FormBuilder, public auth: AuthProvider) {
  console.log("Entering HomePage....");
  this.authstate=this.auth.checkState();

  this.loginForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
  }

  signUp(): void{
  if(this.loginForm.valid) {

    var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
    this.auth.SignInNewUser(credentials).subscribe((data) => {
    this.userName = data.email;
    console.log(this.userName);


    },
    (error) => {
    console.log(error);

    this.anyErrors = error;
    },

    () => {
      console.log("completed");
    });
  }
  }

  login(): void {
        if(this.loginForm.valid) {

          var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
          this.auth.loginWithEmail(credentials).subscribe((data) => {
          this.userName = data.email;
          console.log(this.userName);


          },
          (error) => {
          console.log(error);

          this.anyErrors = error;


  },

  () => {
    console.log("completed");
  });



    }
    }

    logout(): void{
    this.auth.logout();
    }
}
