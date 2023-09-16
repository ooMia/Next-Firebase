import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '@/utils/firebase';
import {DocumentData} from "@firebase/firestore-types";

export const createRecord = async (e: any, path: string, data: object) => {
    e.preventDefault()

    // Add a second document with a generated ID.
    try {
        const docRef = await addDoc(collection(db, path), data);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export const readRecords = async (e: any, path: string) => {
    e.preventDefault()
    return await getDocs(collection(db, path))
}

export const getRecordsByKeyValue = async (e: any, path: string, key: string, value: any) => {
    e.preventDefault()
    const pathRef = collection(db, path)
    const q = query(pathRef, where(key, "==", value));

    return await getDocs(q);
}

export const printQuerySnapshot = async (querySnapshot: any) => {
    querySnapshot.forEach((doc: DocumentData) => {
        const data = doc._document.data.value.mapValue.fields
        console.log(`${doc.id} => `);
        Object.keys(data).map(field => Object.keys(data[field]).map(type => {
            console.log(`${type} \t${field}:${data[field][type]}`)
        }))
    });
}