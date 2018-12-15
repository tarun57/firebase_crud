import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  Users: FirebaseListObservable<any[]>;
  
  userId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider,
    public menuCtrl:MenuController, public afAuth:AngularFireAuth) {
    this.Users = this.firebase.getUserdetails();
    }

  ionViewDidLoad(){
  }
 
  remove(id) {
    this.firebase.removeuser(id);
  }

  detail(user){
    this.navCtrl.setRoot(DetailsPage,{
      name : user.name,
      email: user.email,
      phone:user.phone,
      address:user.address,
      key : user.$key
       });
  }

  addUser(){
    this.navCtrl.setRoot(HomePage);
  }
}
