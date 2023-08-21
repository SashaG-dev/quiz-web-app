import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const quizzesCollectionRef = collection(db, 'quizzes');

export const getAllQuizzes = async () => {
  try {
    const quizzesSnapshot = await getDocs(quizzesCollectionRef);
    const allQuizzes = quizzesSnapshot.docs.map((doc) => {
      return doc.data();
    });
    return allQuizzes;
  } catch (err) {
    console.log(err);
  }
};

export const getQuiz = async (id) => {
  try {
    const docRef = doc(db, 'quizzes', id);
    const quizSnapshot = await getDoc(docRef);
    return quizSnapshot.data();
  } catch (err) {
    console.error(err);
  }
};
