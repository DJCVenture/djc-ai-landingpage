import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { db, auth } from './firebase-utils';

export const createUserRecord = async (userObj) => {
  try {
    const docRef = await addDoc(collection(db, 'trialUsers'), userObj);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const signUp = async (userObj) => {
  // First, check if the email already exists in Firestore
  const usersRef = collection(db, 'trialUsers');
  const q = query(usersRef, where('email', '==', userObj.email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // Email already exists in Firestore, do not proceed with account creation
    console.log('This email is already in use. Please use another email.');
    return false;
  }

  // Email does not exist in Firestore, proceed with creating a new Firebase Auth user
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userObj.email,
      userObj.password
    );
    const displayName = userObj.name;
    await updateProfile(userCredential.user, { displayName: displayName });
    console.log('Updated displayName', displayName);
    console.log('uid:', userCredential.user.uid);

    // Remove the password from the user object and add the uid
    const { password, ...newUserObj } = userObj;
    const finalUserObj = { ...newUserObj, uid: userCredential.user.uid };

    // Create a new user record in Firestore
    await createUserRecord(finalUserObj);
    console.log(finalUserObj, ' is created');
    return userCredential.user.uid;
  } catch (err) {
    console.log(err);
    let message = err.message;

    if (err.code === 'auth/email-already-in-use') {
      message =
        'This email is already in use with Firebase Authentication. Please use another email.';
    }
    notification('Error', message, 'warning');
    return false;
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    // Now that we have the result, we can check the user's email against Firestore
    const email = result.user.email;
    const usersRef = collection(db, 'trialUsers');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // User already exists, do not create a new record
      console.log('User already exists. Skipping createUserRecord.');
      return {status:"registered"}
    } else {
      // User does not exist, proceed to create a new user record
      let userObj = {
        name: result.user.displayName,
        email: result.user.email,
        addOn: 'trial-step1',
        clientId: result.user.email.replace(/[^\w\s]/gi, ''),
        displayName: result.user.displayName,
        referralCode: 'trial-step1',
        createdDate: new Date(),
        phoneNumber: result.user.phoneNumber,
        uid: result.user.uid,
        type: 'Google',
      };
      await createUserRecord(userObj);
      return {status:"new",uid:result.user.uid};
    }
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    return {status:"error"};;
  }
};

// export const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     // Optional: Update or create a user record in your Firestore database
//     // You can call createUserRecord(result.user.displayName, result.user.email) here if needed
//     if (result) {
//       let userObj = {
//         name: result.user.displayName,
//         email: result.user.email,
//         addOn: 'trial',
//         clientId: result.user.email.replace(/[^\w\s]/gi, ''),
//         displayName: result.user.displayName,
//         referralCode: 'trial',
//         createdDate: new Date(),
//         phoneNumber: result.user.phoneNumber,
//         uid: result.user.uid,
//         type: 'Google',
//       };
//       await createUserRecord(userObj);
//     }
//     return result;
//   } catch (error) {
//     // Handle Errors here
//     console.error(error);
//     throw error;
//   }
// };
