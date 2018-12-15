import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {  AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UserDetailsPage } from '../user-details/user-details';
import { EditUserPage } from '../edit-user/edit-user';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  userlist: FirebaseObjectObservable<any[]>;
  user={id:'',name:'',email:'',phone:'',address:''}
  Users: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController,
    public firebase : FirebaseProvider ,  public angularfire:AngularFireDatabase ) {
  this.userlist = angularfire.object('/Users');
  this.user.id = this.navParams.get('key');
  this.user.name = this.navParams.get('name');
  this.user.email = this.navParams.get('email');
  this.user.phone = this.navParams.get('phone');
  this.user.address = this.navParams.get('address');
     console.log(this.userlist);
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
 
  Edit(user){
    console.log(user);
      //  this.navCtrl.setRoot(EditUserPage,{
      //  name : user.name,
      //  email: user.email,
      //  phone:user.phone,
      //  address:user.address,
      //  key : user.$key,
      //  });
  }

  remove(user){
 
  let uid = user.id;

this.firebase.removeuser(uid);
this.navCtrl.setRoot(UserDetailsPage);
  //this.firebase.removeuser(userId);

} 
 
}
