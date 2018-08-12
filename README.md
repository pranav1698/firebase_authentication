# firebase_authentication
Its a project that uses firebase-signin methods to authenticate user and then uses firebase trigger and cloud function to store data in the firebase provided database
We can use firebase sign-in methods that are provided by firebase authentication to provide login service in our app; We are doing a few things here firstly in a normal login form
we are asking the user's login information like user's email and password then firebase is checking that the added details belong to any user present in firebase.I have also provided forget password link that requires you to reset tour password on clicking it.
THen accordingly firebase takes appropriate actions; If the user wants to make a new account in the app we open a sign-up form when it is submitted; the account is made and firebase cloud functions is triggered which causes the storing of details of the user(i.e. email) in the firebase's database.

