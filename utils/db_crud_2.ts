import { app } from '@/utils/firebase'
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  and,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { FirebaseStorage, getStorage } from 'firebase/storage'

const db = getFirestore(app)
const storage: FirebaseStorage = getStorage(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export const createDocument = async (e: any, path: string, data: object) => {
  // Add a second document with a generated ID.
  try {
    const docRef = await addDoc(collection(db, path), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const readDocuments = async (path: string) => {
  return await getDocs(collection(db, path))
}

export const getDocumentsByKeyValue = async (e: any, path: string, key: string, value: any) => {
  const pathRef = collection(db, path)
  const q = query(pathRef, where(key, '==', value))

  return await getDocs(q)
}

export const getDocumentsByCategories = async (category: any, subcategory: any) => {
  const pathRef = collection(db, 'wdList')

  let q
  if (category > 0) {
    if (subcategory > 0) {
      q = query(
        pathRef,
        and(
          where('category', '==', parseInt(category)),
          where('subcategory', '==', parseInt(subcategory)),
        ),
      )
    } else {
      q = query(pathRef, where('category', '==', parseInt(category)))
    }
  } else {
    q = query(pathRef, where('category', '!=', false))
  }

  return await getDocs(q)
}

export const printQuerySnapshot = async (querySnapshot: any) => {
  querySnapshot.forEach((doc: DocumentData) => {
    const data = doc._document.data.value.mapValue.fields
    console.log(`${doc.id} => `)
    Object.keys(data).map((field) =>
      Object.keys(data[field]).map((type) => {
        console.log(`${type} \t${field}:${data[field][type]}`)
      }),
    )
  })
}

export const deleteDocumentsByKeyValue = async (e: any, path: string, key: string, value: any) => {
  const q = await getDocumentsByKeyValue(e, path, key, value)

  q.forEach((e) => {
    deleteDoc(doc(db, path, e.id))
  })
}

export const updateDocumentsByKeyValue = async (
  e: any,
  path: string,
  key: string,
  value: any,
  obj: any,
) => {
  const q = await getDocumentsByKeyValue(e, path, key, value)

  q.forEach((e) => {
    updateDoc(doc(db, path, e.id), obj)
  })
}
