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


import { UserProvider } from '../providers/user/user';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
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
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
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
    UserProvider,
    AuthenticationProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
