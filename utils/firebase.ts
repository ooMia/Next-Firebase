// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  Firestore,
  getFirestore,
  initializeFirestore,
  memoryLocalCache,
} from 'firebase/firestore';
import {FirebaseOptions} from '@firebase/app-types';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Memory cache is the default if no config is specified.
// initializeFirestore(app);

// This is the default behavior if no persistence is specified.
initializeFirestore(app, {localCache: memoryLocalCache()});

// Defaults to single-tab persistence if no tab manager is specified.
// initializeFirestore(app, {localCache: persistentLocalCache(
//     /*settings*/{
//         cacheSizeBytes: CACHE_SIZE_UNLIMITED
//       })});

// // Same as `initializeFirestore(app, {localCache: persistentLocalCache(/*settings*/{})})`,
// // but more explicit about tab management.
// initializeFirestore(app,
//     {localCache:
//           persistentLocalCache(/*settings*/{tabManager: persistentSingleTabManager()})
//     });
//
// // Use multi-tab IndexedDb persistence.
// initializeFirestore(app,
//     {localCache:
//           persistentLocalCache(/*settings*/{tabManager: persistentMultipleTabManager()})
//     });





// Initialize Cloud Firestore and get a reference to the service
export const db:Firestore = getFirestore(app);