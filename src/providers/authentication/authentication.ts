import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface User {
  uid: string;
  email: string;
  password:string;
  photoURL?: string;
  fullname: string;
  matricule: string;
}

@Injectable()
export class AuthenticationProvider {

  private user: firebase.User;
  public fireAuth:firebase.auth.Auth;
  public userProfileRef:firebase.database.Reference;

  constructor(public afAuth: AngularFireAuth,public http: HttpClient) {

    this.fireAuth = firebase.auth();
    this.userProfileRef = firebase.database().ref('userProfile');
    console.log('Hello AuthenticationProvider Provider');
  }

  signupUser(fullname: string, matricule: string, email: string, password: string ): Promise<void> {
      return this.fireAuth.createUserWithEmailAndPassword(email, password).then( newUser => {
        this.userProfileRef.child(newUser.user.uid).push({
          fullname: fullname,
          matricule: matricule,
          email: email,
          password: password
        });
      });
    }

  	signInWithEmail(credentials) {
  		console.log('Sign in with email');
  		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
  			 credentials.password);
  	}

  //   signUp(credentials) {
  // 	return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  // }

  get authenticated(): boolean {
    return this.user !== null;
  }
  getEmail() {
    return this.user && this.user.email;
  }
  //  getDisplayName(){
  //  	  return this.user && this.user.fullname;
  // }
  getPhoto() {
    return this.user && this.user.photoURL;
  }



  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }


  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
  		.then(function(result) {
  			if (result.credential) {
  			    // This gives you a Google Access Token. You can use it to access the Google API.
  			    var token = result.credential;
  			    // ...
  			  }
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
      console.log(errorCode);
    var errorMessage = error.message;
      console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
      console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
      console.log(credential);
    // ...
  });
    }

    resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }


}
