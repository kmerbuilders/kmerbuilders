//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface User {
  uid: string;
  email: string;
  password:string;
  username: string;
  fullname: string;
   number: string;
   skill: string;
   location: string;
   aboutme: string;

}



@Injectable()
export class AuthenticationProvider {

  // private user: firebase.User;
  // public fireAuth:firebase.auth.Auth;
  // public userProfileRef:firebase.database.Reference;



  constructor(public afAuth:AngularFireAuth) {



    console.log('Hello AuthenticationProvider Provider');
  }




    loginUser(newEmail: string, newPassword: string): Promise<any> {
      return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    }

    resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
  const userId: string = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/userProfile/${userId}`)
    .off();
  return firebase.auth().signOut();
}

signupUser(email: string, password: string): Promise<any> {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(newUserCredential => {
      firebase
        .database()
        .ref(`/userProfile/${newUserCredential.user.uid}/email`)
        .set(email);
    })
    .catch(error => {
      console.error(error);
      throw new Error(error);
    });
}
}
