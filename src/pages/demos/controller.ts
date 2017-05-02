import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DeviceMotion, DeviceMotionAccelerationData} from "@ionic-native/device-motion";

@Component({
  selector: 'demos',
  templateUrl: 'view.html'
})
export class Demos {

  private motion_sub = null;
  read_x = 0;
  read_y = 0;
  read_z = 0;

  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion) {

  }

  ionViewDidEnter(){
    this.motion_sub = this.deviceMotion.watchAcceleration({frequency: 500}).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.read_x = acceleration.x;
      this.read_y = acceleration.y;
      this.read_z = acceleration.z;
    });
  }

  ionViewWillLeave(){
    this.motion_sub.unsubscribe();
  }
}
