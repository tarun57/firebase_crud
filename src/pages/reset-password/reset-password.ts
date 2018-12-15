import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  myemail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  reset(){
    this.afAuth.auth.sendPasswordResetEmail(this.myemail)
    .then(() => {
      let alert = this.alertCtrl.create({
        title: 'Reset password',
        message: 'Check your email account and reset your password',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.myemail="";
             this.navCtrl.setRoot(LoginPage);
           }
          },
       ]
      });
    })
    .catch((error: any) =>{
      let alert = this.alertCtrl.create({
        title: 'Reset',
        message: 'Email is not exist',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
         
        ]
      });
      alert.present();
    });
  }
}
