import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AuthProvider} from '../../providers/auth/auth';

import { LoginPage } from '../../pages/login/login';


/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  public forgotForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authProvider: AuthProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.forgotForm = formBuilder.group({
      email: [''],

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  forgotPassword(){
    this.authProvider.resetPassword(this.forgotForm.value.email)
    .then(() => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(LoginPage);
      });
    }, (error) => {
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: 'OK',
            role: 'cancel'
          }
        ]
      })
    });
    this.loading = this.loadingCtrl.create();
  }
}
