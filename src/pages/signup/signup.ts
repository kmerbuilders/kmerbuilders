import { Component,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading,Slides } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
//import { ResetPasswordPage } from '../resetPassword/resetPassword';
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
  loginForm: FormGroup;
  signupForm: FormGroup;

  public loading:Loading;
  userList: Observable<UserProvider[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     fb: FormBuilder,public authData: AuthenticationProvider,
     public alertCtrl: AlertController, public loadingCtrl:LoadingController)
      {
    this.loginForm = fb.group({
      // fullname: ['', Validators.compose([Validators.required])],
      // username: ['', Validators.compose([Validators.required])],
      // number: ['', Validators.compose([Validators.required,Validators.maxLength(12)])],
      // skill: ['', Validators.compose([Validators.required])],
      // location: ['', Validators.compose([Validators.required])],
      // aboutme: ['', Validators.compose([Validators.required])],
		//	email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
      username: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

		});

    this.signupForm = fb.group({
      fullname: ['', Validators.compose([Validators.required])],

      number: ['', Validators.compose([Validators.required,Validators.maxLength(12)])],
      skill: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      aboutme: ['', Validators.compose([Validators.required])]
      // email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
      // password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

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

  openHomepage(){
    this.navCtrl.setRoot(HomePage);
  }



  goToResetPassword(){
  this.navCtrl.push(ResetPasswordPage);
}


// loginUser(){
//   if (!this.loginForm.valid){
//     console.log(this.loginForm.value);
//   } else {
//     this.authData.loginUser(this.loginForm.value.username, this.loginForm.value.password)
//     .then( authData => {
//       this.goToSlide();
//     });
//
//
//   }


loginUser(){
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authData.signupUsers(this.loginForm.value.username, this.loginForm.value.password)
    .then( authData => {
      this.goToSlide();
    });


  }
}

signupUser(){
  if (!this.signupForm.valid){
    console.log(this.signupForm.value);
  } else {
    this.authData.signupUserss(this.signupForm.value.fullname, this.signupForm.value.number,
      this.signupForm.value.skill,this.signupForm.value.location,this.signupForm.value.aboutme)
    .then( authData => {
      this.openHomepage();
    }).catch( error => {
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

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
}


}
