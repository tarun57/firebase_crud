import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import * as firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
myemail:any;
mypassword:any;
phoneNumber:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public google:GooglePlus,
    public afAuth:AngularFireAuth, public alertCtrl:AlertController, public fb: Facebook) {
  }

 

  signup(){
    this.navCtrl.push(SignupPage);
  }

 
  submit() {
    this.afAuth.auth.signInWithEmailAndPassword(this.myemail,this.mypassword)
    .then(() => {
      this.navCtrl.setRoot(TabsPage);
    })
    .catch((error: any) =>{
      let alert = this.alertCtrl.create({
        title: 'Login',
        message: 'You are not registerd so firstly register and click on signup',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
             this.myemail="";
             this.mypassword="";
            }
          },
          {
            text: 'Signup',
            handler: () => {
              this.myemail="";
              this.mypassword="";
             this.navCtrl.push(SignupPage);
            }
          }
        ]
      });
      alert.present();
    });
  }

  reset(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }

  loginwithgoogle(){
    this.google.login({
     // 'webClientId': '*************************'
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

  }
        
  LoginwithFacebook(){
   

    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });

  }

  
}
