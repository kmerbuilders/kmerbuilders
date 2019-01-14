import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToInfo(){
    this.navCtrl.push(PersonalinfoPage);
  }

}
