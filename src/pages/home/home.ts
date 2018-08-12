import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = firebase.auth().currentUser;
  email = this.user.email;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  menuToggle(){
    console.log("called");
    this.menuCtrl.open();
  }

}
