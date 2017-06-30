import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthProvider {
myauthdata : string;
  constructor(private af: AngularFireAuth) {

  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password
      ).then((authData) => {
        this.myauthdata = this.af.auth.currentUser.uid;
        console.log("Authentication Data : " + this.myauthdata);
        observer.next(authData);

      }).catch((error) => {

        observer.error("Error in login : "  + error);
      });
    });
  }

  logout() {
      this.af.auth.signOut();
    }




  get currentUser():string{

   return this.af.auth.currentUser?this.af.auth.currentUser.email:null;
 }

}
