import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AddUserPage } from '../add-user/add-user';
import { FormGroup } from '@angular/forms';

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
  myemail:any;
  myconfirm_email:any;
  mypassword:any
  f:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth :AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  submit(){
   const result =  this.afAuth.auth.createUserWithEmailAndPassword(this.myemail,this.mypassword);
    this.navCtrl.setRoot(AddUserPage);
  }
}
