import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UserDetailsPage } from '../user-details/user-details';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   {
  name='';
  email = '';
  phone = '';
  address = '';
  user: FirebaseListObservable<any>; contact = { id: '', name: '', email: '', phone: '', address: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public firebase : FirebaseProvider, public alertCtrl:AlertController,
     public afAuth:AngularFireAuth
    ) {
  this.user = this.firebase.getUserdetails();
  this.contact.id = this.navParams.get('key');
  this.contact.name = this.navParams.get('name');
  this.contact.email = this.navParams.get('address');
  this.contact.phone = this.navParams.get('phone');
  this.contact.address = this.navParams.get('city');
  }

  insertData() {
    let user = {name:this.name, email:this.email, phone: this.phone, address : this.address }
    this.firebase.adduser(user);
    this.name="";
    this.email="";
    this.phone = "";
    this.address = "";
    this.navCtrl.setRoot(UserDetailsPage);
  }

  details(){
    this.navCtrl.setRoot(UserDetailsPage);
  }

  reset(){
    let alert = this.alertCtrl.create({
      title: 'Reset form',
      message: 'Do you agree to reset these informations?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.name="";
            this.email="";
            this.phone="";
            this.address="";
          }
        }
      ]
    });
    alert.present();
  }

}
