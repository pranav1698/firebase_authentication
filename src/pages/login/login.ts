import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, AlertController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { SignupPage } from '../../pages/signup/signup';
import { ForgetPage } from '../../pages/forget/forget'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  public loading: Loading;
  form: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public authProvider: AuthProvider,public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: [''],
      password: [''],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(): void {

    this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .then( authData =>{
      this.loading.dismiss().then( () =>{
        this.navCtrl.setRoot(HomePage);
      });
    }, error =>{
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
      this.loading = this.loadingCtrl.create({
        content: 'Searching.. please wait',
      });
      this.loading.present();
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  forget(){
    this.navCtrl.push(ForgetPage);
  }
}
