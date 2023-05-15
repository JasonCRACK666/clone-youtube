import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// code-spell: disable
const firebaseConfig = {
  apiKey: 'AIzaSyCXAau8Sh3YZsxYp4BWCBKJcuxE8Omxj_w',
  authDomain: 'app-firebase-nextjs.firebaseapp.com',
  projectId: 'app-firebase-nextjs',
  storageBucket: 'app-firebase-nextjs.appspot.com',
  messagingSenderId: '378008522881',
  appId: '1:378008522881:web:8078cdc71964d4913bfd80',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
