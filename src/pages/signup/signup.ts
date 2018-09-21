import { Component,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading  } from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { LoginPage } from '../login/login';
import { EmailValidator } from '../../Validators/email';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

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

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder) {
    this.form = fb.group({
      fullname: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],  
      skill: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
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
  // signupUser(){
  //   if (!this.form.valid){
  //     console.log(this.form.value);
  //   } else {
  //     this.auth.signupUser(
  //       this.form.value.fullname,
  //       this.form.value.matricule,
  //       this.form.value.email,
  //       this.form.value.password)
  //     .then(() => {
  //       this.loading.dismiss().then( () => {
  //         this.navCtrl.setRoot(LoginPage);
  //       });
  //     }, (error) => {
  //       this.loading.dismiss().then( () => {
  //         let alert = this.alertCtrl.create({
  //           message: error.message,
  //           buttons: [
  //             {
  //               text: "Ok",
  //               role: 'cancel'
  //             }
  //           ]
  //         });
  //         alert.present();
  //       });
  //     });
  //     this.loading = this.loadingCtrl.create();
  //     this.loading.present();
  //   }



}
