import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {

    this.tab1 = LoginPage;
    this.tab2 = SignupPage;

  }

}
