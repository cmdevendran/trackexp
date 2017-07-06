import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthProvider {
myauthdata : string;
myuid : string;
custom_token : string;


  constructor(private af: AngularFireAuth) {




  }

  checkState():string {
  this.af.auth.onAuthStateChanged(function(user) {
  if (user) {

    console.log("checkState : "+ user.uid);

  } else {
  this.af.auth().signInWithCustomToken(this.custom_token).catch(function(error) {
  // Handle Errors here.
  console.log("error in checkstate : "+ error);

  // ...
});
  }
});
console.log("within checkstate myuid : "+this.myuid);
return this.myuid;
  }

createcustomToken(myuid){

console.log("custom token : " + this.custom_token)
}


  // Register a new user
  SignInNewUser(credentials){
  return Observable.create(observer => {
    this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password
    ).then((authData) => {

      this.myauthdata = authData.uid;

      this.custom_token = authData.User.getToken(true);
      this.createcustomToken(this.custom_token);
      console.log("Authentication Data : " + this.custom_token);

      observer.next(authData);

    }).catch((error) => {



      observer.error(error);
    });
  });


  }


  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password
      ).then((authData) => {
        this.myauthdata = authData.uid;
        console.log("Authentication Data : " + this.myauthdata);
        observer.next(authData);

      }).catch((error) => {



        observer.error(error);
      });
    });
  }

  checkAuth(){
  if(this.myauthdata==null){
    console.log("Authentication Data is null : " + this.myauthdata);
  }
  else{
  console.log("Authentication Data is not null : " + this.myauthdata);
  }
  }



  logout() {
      this.af.auth.signOut();
    }




  get currentUser():string{

   return this.af.auth.currentUser?this.af.auth.currentUser.uid:null;
 }


 get currentUserName():string{

  return this.af.auth.currentUser?this.af.auth.currentUser.email:null;
}
}
