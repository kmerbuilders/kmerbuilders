import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PersonalinfoPage } from '../pages/personalinfo/personalinfo';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';

import { firebaseConfig } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashscreenPage,
    LoginPage,
    SignupPage,
    PersonalinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashscreenPage,
    LoginPage,
    SignupPage,
    PersonalinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
