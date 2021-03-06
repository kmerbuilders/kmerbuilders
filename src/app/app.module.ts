import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { PersonalinfoPage } from '../pages/personalinfo/personalinfo';

=======
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PersonalinfoPage } from '../pages/personalinfo/personalinfo';
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff
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
<<<<<<< HEAD
    PersonalinfoPage,
    SignupPage
=======
    SignupPage,
    PersonalinfoPage
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff
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
<<<<<<< HEAD
    PersonalinfoPage,
    SignupPage
=======
    SignupPage,
    PersonalinfoPage
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff
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
