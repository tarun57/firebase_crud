import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { UserDetailsPage } from '../user-details/user-details';
import { ProfilePage } from '../profile/profile';
import { IonicPage } from 'ionic-angular';

@IonicPage(
  
)
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserDetailsPage;
  tab2Root = ProfilePage;
  tab3Root = HomePage;

  constructor() {

  }
}
