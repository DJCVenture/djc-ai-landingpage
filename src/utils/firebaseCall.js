import { collection, getDocs, query, where, addDoc,doc } from 'firebase/firestore';
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
    const userRef = doc(db, "users", userObj.email);
    // const docRef = await addDoc(collection(db, 'users'), userObj);
    // console.log('Document written with ID: ', docRef.id);
    // return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const signUp=async (fullName, email, phone, password, setUser, setAuthUser, signupReferral)=> {
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const displayName = capitalizeFirstLetter(fullName);
      await updateProfile(auth.currentUser, { displayName: displayName });
      console.log("Updated displayName");
      // const authUser = userCredential.user;
      // console.log(authUser);

      const user = await createNewUser(displayName, email, phone, setUser, authUser, signupReferral);
      // setAuthUser(authUser);
      console.log(user, " is created");
      return true;
  } catch (err) {
      console.log(err);
      let message = err.message;

      if (err.code === "auth/email-already-in-use") {
          message = "This email is already in use. Please use another email";
      }
      notification("Error", message, "warning");
      return false;
  }
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    // Now that we have the result, we can check the user's email against Firestore
    const email = result.user.email;
    const usersRef = collection(db, 'users');
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
