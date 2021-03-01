import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8Vkt_xcrzOUFPfOi2hRGgdYEtiN3NLxk",
    authDomain: "slack-clone-70222.firebaseapp.com",
    projectId: "slack-clone-70222",
    storageBucket: "slack-clone-70222.appspot.com",
    messagingSenderId: "1019621996339",
    appId: "1:1019621996339:web:64dc77fe17378cd7cfb046"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};