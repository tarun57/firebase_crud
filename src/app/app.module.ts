import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AddUserPage } from '../pages/add-user/add-user';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseProvider } from '../providers/firebase/firebase';
import { DetailsPage } from '../pages/details/details';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LogoutPage } from '../pages/logout/logout';
import { AuthProvider } from '../providers/auth/auth';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
  apiKey: "AIzaSyBhPvc8u0NopMHZ-Ha2k0e4Sr2nPhlQZ3Y",
  authDomain: "vivid-bond-223806.firebaseapp.com",  
  databaseURL: "https://vivid-bond-223806.firebaseio.com",
  projectId: "vivid-bond-223806",
  storageBucket: "vivid-bond-223806.appspot.com",
  messagingSenderId: "958359535540"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddUserPage,
    UserDetailsPage,
    DetailsPage,
    EditUserPage,
   LogoutPage,
  ProfilePage,
  ResetPasswordPage,
  TabsPage,
  LoginPage,
  SignupPage
  ],
  imports: [    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddUserPage,
    UserDetailsPage,
    DetailsPage,
    EditUserPage,
    LogoutPage,
    ProfilePage,
    ResetPasswordPage,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth, 
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthProvider
   ]
})
export class AppModule {}
