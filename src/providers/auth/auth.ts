import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  number = Math.floor(Math.random() * 1000000) + " ";

  constructor() {
    console.log('Hello AuthProvider Provider');

  }

  loginUser(email: string, password: string ): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  
  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

}
