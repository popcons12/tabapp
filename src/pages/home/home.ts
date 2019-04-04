import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //สร้าง properties Fullname
  fullname:String="Jiraporn Didjaroen";


  //สร้าง properties รับค่าจากฟอร์ม
  profileData={
    'fullname':"",
    'email':"",
    'tel':""
  }
 //constructor HomePage(navctrl:NavController):HomePage

  constructor(public navCtrl: NavController) {

  }

  showprofile(){
   // alert("OK")
   //เปิดหน้า Profile
     this.navCtrl.push(ProfilePage,{
     "fullname":this.profileData.fullname,
     "email":this.profileData.email,
     "tel":this.profileData.tel
    
    
    });
  }

}
