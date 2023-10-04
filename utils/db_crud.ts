'use server'

import { getThemesAssociatedJobs } from '@/backend/api/wantedAPI'
import { ThemeJob } from '@/types/ThemeJob'
import { db } from '@/utils/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

export async function getDocumentsByCollectionName(collectionName: string) {
  return collection(db, collectionName)
}

export async function selectDocumentByDocumentId(collectionName: string, documentId: string) {
  return await getDoc(doc(db, collectionName, documentId))
}

export async function selectCachedDocumentByDocumentId(collectionName: string, documentId: string) {
  try {
    return await getDocFromCache(doc(db, collectionName, documentId))
  } catch (e) {
    return await selectDocumentByDocumentId(collectionName, documentId)
  }
}

export const getAllDocumentsByKeyValue = async (
  collectionName: string,
  key: string,
  value: any,
) => {
  const pathRef = collection(db, collectionName)
  const q = query(pathRef, where(key, '==', value))

  return await getDocs(q).then((val) => val.docs)
}

export const fetchDataFromWantedAPI = async (
  collectionName: string,
  company: string,
  limit: number,
  offset: number,
): Promise<[ThemeJob, { fetched: Date; requested: Date }]> => {
  const data = selectCachedDocumentByDocumentId(collectionName, 'theme')
  if (data) {
    console.log(`selectCachedDocumentByDocumentId`)
    return data.then((res) => [res.get('data'), res.get('timestamp')])
  } else {
    console.log(`getThemesAssociatedJobs`)
    const [data, timestamp] = await getThemesAssociatedJobs(company, limit, offset)
    await setDoc(doc(db, collectionName, 'theme'), {
      data: data,
      timestamp: timestamp,
    })
    return [data, timestamp]
  }
}
