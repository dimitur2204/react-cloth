import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { User } from '../App';

const config = {
	apiKey: 'AIzaSyBu3NNOYGjWYrsZQx7G-AgnKuQ1WrnWldw',
	authDomain: 'react-cloth-ebfac.firebaseapp.com',
	projectId: 'react-cloth-ebfac',
	storageBucket: 'react-cloth-ebfac.appspot.com',
	messagingSenderId: '464292898209',
	appId: '1:464292898209:web:61907095c17e78312717e0',
	measurementId: 'G-GRSCZHER1Q',
};

const converter = {
	toFirestore: (data: User) => data,
	fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
		snap.data() as User,
};

export const createUserProfileDoc = async (
	userAuth: firebase.User | null,
	data: any = null
) => {
	if (!userAuth) return;
	const userRef = firestore
		.doc(`users/${userAuth.uid}`)
		.withConverter(converter);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...data,
			});
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
