import { Component,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading,Slides } from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { LoginPage } from '../login/login';
import { EmailValidator } from '../../Validators/email';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';

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
  @ViewChild(Slides) slides: Slides;

  signupError: string;
  form: FormGroup;
  public loading:Loading;
  userList: Observable<UserProvider[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     fb: FormBuilder,public auth: AuthenticationProvider,
     public alertCtrl: AlertController, public loadingCtrl:LoadingController)
      {
    this.form = fb.group({
      fullname: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required,Validators.maxLength(12)])],
      skill: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      aboutme: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

		});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToSlide() {
   this.slides.slideTo(2, 500);
 }

  openLogin()
  {
    this.navCtrl.setRoot(LoginPage);
  }



  goToInfo(){
    this.navCtrl.setRoot(PersonalinfoPage);
  }

  signupUser(){
    if (!this.form.valid){
      console.log(this.form.value);
    } else {
      this.auth.signupUser(
        this.form.value.fullname,
        this.form.value.username,
        this.form.value.email,
        this.form.value.password,
        this.form.value.number,
        this.form.value.skill,
        this.form.value.location,
        this.form.value.aboutme
      )
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(LoginPage);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }


}
}
