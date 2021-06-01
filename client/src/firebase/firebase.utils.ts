import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { User } from '../App'
import { Collection, Collections } from '../pages/shop/shop.component'

const config = {
  apiKey: 'AIzaSyBu3NNOYGjWYrsZQx7G-AgnKuQ1WrnWldw',
  authDomain: 'react-cloth-ebfac.firebaseapp.com',
  projectId: 'react-cloth-ebfac',
  storageBucket: 'react-cloth-ebfac.appspot.com',
  messagingSenderId: '464292898209',
  appId: '1:464292898209:web:61907095c17e78312717e0',
  measurementId: 'G-GRSCZHER1Q',
}

export function converter<T>() {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) => snap.data() as T,
  }
}
export const createUserProfileDoc = async (userAuth: firebase.User | null, data: any = null) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`).withConverter(converter<User>())
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}

export const addCollectionAndDocs = async (collectionKey: string, objectsToAdd: any[]) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (
  snap: firebase.firestore.QuerySnapshot<Collection>,
) => {
  const tranformedCollection = snap.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return tranformedCollection.reduce<Collections>((acc, curr) => {
    acc[curr.title.toLowerCase()] = curr
    return acc
  }, {})
}

export const getCurrentUser = (): Promise<firebase.User | null> => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      res(userAuth)
    }, rej)
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
