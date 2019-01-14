import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
=======
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  tab1: any;
  tab2: any;

=======
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff

  constructor(public navCtrl: NavController) {
    this.tab1 = SignupPage ;
    this.tab2 = LoginPage ;


  }

  openSignup()
  {
    this.navCtrl.setRoot(SignupPage);
  }

 openLogin()
 {
   this.navCtrl.setRoot(LoginPage);
 }


}
