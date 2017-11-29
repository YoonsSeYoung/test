import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
@Component({
templateUrl: 'Alert.html'
})
export class AlertPage {

constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController) {
      
      }
      
showBasicAlert() {
    let alert = this.alertCtrl.create({
        title: 'Basic Alert',
        subTitle: '기본 알림창입니다.',
        buttons: ['OK']
      });
      alert.present();
  }
  
}