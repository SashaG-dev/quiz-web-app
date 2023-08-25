import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const quizzesCollectionRef = collection(db, 'quizzes');
const challengesCollectionRef = collection(db, 'challenges');

export const getAllQuizzes = async () => {
  try {
    const quizzesSnapshot = await getDocs(quizzesCollectionRef);
    const allQuizzes = quizzesSnapshot.docs.map((doc) => {
      return doc.data();
    });
    return allQuizzes;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getQuiz = async (id) => {
  try {
    const docRef = doc(db, 'quizzes', id);
    const quizSnapshot = await getDoc(docRef);
    return quizSnapshot.data();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllChallenges = async () => {
  try {
    const challengesSnapshot = await getDocs(challengesCollectionRef);
    const allChallenges = challengesSnapshot.docs.map((doc) => {
      return doc.data();
    });
    return allChallenges;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getChallenge = async (id) => {
  try {
    const docRef = doc(db, 'challenges', id);
    const challengeSnapshot = await getDoc(docRef);
    return challengeSnapshot.data();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
