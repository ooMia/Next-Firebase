import { FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db: Firestore = getFirestore(app)
const storage: FirebaseStorage = getStorage(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { app, db, storage, auth }
