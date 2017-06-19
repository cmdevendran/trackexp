import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthProvider {

  constructor(private af: AngularFireAuth) {
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password
      ).then((authData) => {
        console.log("Authentication Data : " +authData);
        observer.next(authData);
      }).catch((error) => {
        observer.error("Error in login : "  + error);
      });
    });
  }
}
