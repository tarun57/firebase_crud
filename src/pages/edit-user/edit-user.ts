import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {  AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';


/**
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  userlist: FirebaseObjectObservable<any[]>;
 users : FirebaseObjectObservable<any>;
 user={id:'',name:'',email:'',phone:'',address:''}
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
    public firebase : FirebaseProvider, public angularfire:AngularFireDatabase, public  afAuth:AngularFireDatabase) {
  this.userlist = angularfire.object('/Users');
  this.user.id = this.navParams.get('key');
  this.user.name = this.navParams.get('name');
  this.user.email = this.navParams.get('email');
  this.user.phone = this.navParams.get('phone');
  this.user.address = this.navParams.get('address');
  console.log();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  Save(id){
    this.afAuth.list('/Users').update(id,{
      name:name
          });
   
  }
 
}
