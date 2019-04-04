import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController) {

  }

  showactionsheet(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Confirm to Delete',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            alert("ลบรายการแล้ว");
          }
        },{
          text: 'Keep IT',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'ยืนยันการลบข้อมูล',
      message: 'คุณต้องการลบข้อมูลใช่หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  

}
