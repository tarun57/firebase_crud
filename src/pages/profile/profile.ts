import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
profile:any;
Users: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,
    public afAuth:AngularFireAuth) {
   
      }
    
      ionViewDidLoad() {
  
  }

  logout(){
    this.afAuth.auth.signOut();
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'You are logut',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
            console.log('Disagree clicked');
          }
        },
       ]
    });
    alert.present();
  }

}
