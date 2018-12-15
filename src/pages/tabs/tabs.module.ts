import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';
import { AddUserPage } from '../add-user/add-user';
import { UserDetailsPage } from '../user-details/user-details';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { EditUserPage } from '../edit-user/edit-user';




//added by pizoneinfotech
@NgModule({
  declarations: [
    TabsPage,
    ProfilePage,
AddUserPage,
UserDetailsPage,
HomePage,
DetailsPage,
EditUserPage
  ],
  entryComponents: [
    TabsPage,
    ProfilePage,
    AddUserPage,
    UserDetailsPage,
    HomePage,
    DetailsPage,
    EditUserPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage)
  ],
  
})
export class TabsPageModule {}
