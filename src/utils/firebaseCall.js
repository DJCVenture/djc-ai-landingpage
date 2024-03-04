import { collection, getDocs, query, where,addDoc } from "firebase/firestore";
import { db } from "./firebase-utils";

export const getAgentListings = async () => {
    try {
        const listingsCollection = collection(db, "users");
        const q = query(listingsCollection, where("email", "==", "keatwei.chong@gmail.com"
        ));
        const querySnapshot = await getDocs(q);
        const listings = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return listings;
    } catch (error) {
        console.error("Error retrieving data from Firestore:", error);
       
    }
};

export const createUserRecord = async (name, email) => {
    try {
      const docRef = await addDoc(collection(db, "trialUsers"), {
        name: name,
        email: email,
        addOn:'trial',
        clientId:email.replace(/[@.]/g, ''),
        displayName:email,
        email:email,
        referralCode:'trial',
        createdDate: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

