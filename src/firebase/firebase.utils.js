import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHwRlpjldFexgUiHcGDI05MfmZmAfjHUc",
    authDomain: "crwn-db-ff18f.firebaseapp.com",
    databaseURL: "https://crwn-db-ff18f.firebaseio.com",
    projectId: "crwn-db-ff18f",
    storageBucket: "crwn-db-ff18f.appspot.com",
    messagingSenderId: "336299207920",
    appId: "1:336299207920:web:6bc2fb42a4ca35a2102635"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        console.log("masuk gan");
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try { 
        await
        userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });

    } catch(error) {
        console.log(error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signItWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;