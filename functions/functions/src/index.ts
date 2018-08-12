import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user()
  .onCreate((userRecord, context) => {
    return admin.database().ref(`/users/${userRecord.uid}`).set({
      email: userRecord.email
    })
  })
