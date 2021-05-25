import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBu3NNOYGjWYrsZQx7G-AgnKuQ1WrnWldw',
	authDomain: 'react-cloth-ebfac.firebaseapp.com',
	projectId: 'react-cloth-ebfac',
	storageBucket: 'react-cloth-ebfac.appspot.com',
	messagingSenderId: '464292898209',
	appId: '1:464292898209:web:61907095c17e78312717e0',
	measurementId: 'G-GRSCZHER1Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
