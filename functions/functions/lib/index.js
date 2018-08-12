"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.createUser = functions.auth.user()
    .onCreate((userRecord, context) => {
    return admin.database().ref(`/users/${userRecord.uid}`).set({
        email: userRecord.email
    });
});
//# sourceMappingURL=index.js.map