import {addDoc, collection, getDocs} from 'firebase/firestore';
import {db} from '@/utils/firebase';

export const createRecord = async (e:any) => {
  // Add a second document with a generated ID.
  
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Alan',
      middle: 'Mathison',
      last: 'Turing',
      born: 1912,
    });
    
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const readDB = async (e:any) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().first} ${doc.data().middle} ${doc.data().last} ${doc.data().born}`);
  });
}