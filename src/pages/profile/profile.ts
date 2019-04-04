import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  getfullname:String;
  getemail:String;
  gettel:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getfullname=this.navParams.get("fullname");
    this.getemail=this.navParams.get("email");
    this.gettel=this.navParams.get("tel");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
