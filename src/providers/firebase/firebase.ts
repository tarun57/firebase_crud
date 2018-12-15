import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }
 

  getUserdetails() {
   return this.afd.list('/Users/')
  }
 
  adduser(name) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.afd.list('/Users/').push(name)), 1000);
    });
    promise.then(function(value) {
     console.log('Addedd');    
    });
    
  }
 
  

  removeuser(uid) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.afd.list('/Users/').remove(uid)), 1000);
    });
    promise.then(function(value) {
     console.log('Removed');    
    });
     }
}