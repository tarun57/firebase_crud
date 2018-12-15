import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { LoginPage } from '../pages/login/login';
import { auth } from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  
  @ViewChild('nav') nav:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public  menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


 
  
}

