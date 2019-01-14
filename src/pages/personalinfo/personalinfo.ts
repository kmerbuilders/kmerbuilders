import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading  } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { EmailValidator } from '../../Validators/email';
/**
 * Generated class for the PersonalinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalinfo',
  templateUrl: 'personalinfo.html',
})
export class PersonalinfoPage {

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder) {
    this.form = fb.group({
      fullname: ['', Validators.compose([Validators.required])],
      tel: ['', Validators.compose([Validators.required])],
      skill: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

		});



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalinfoPage');
  }

}
