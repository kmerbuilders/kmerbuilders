import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController) {
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
