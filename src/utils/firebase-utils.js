import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";

// Staging database
const firebaseConfig_staging = {
    apiKey: "AIzaSyD9efNzRLffpQtHJSu9Ec71ZIY6Oi1RE_Y",
    authDomain: "djc-leads-v2-staging.firebaseapp.com",
    projectId: "djc-leads-v2-staging",
    storageBucket: "djc-leads-v2-staging.appspot.com",
    messagingSenderId: "136484783097",
    appId: "1:136484783097:web:afb977d8ac8a0ed4a4b328"
};

// main database
// const firebaseConfig_production = {
//     apiKey: "AIzaSyA_RK0S_PuVgWbbCcTJnrT2oSg6rIY_lBI",
//     authDomain: "facebook-api-59e5c.firebaseapp.com",
//     databaseURL: "https://facebook-api-59e5c-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "facebook-api-59e5c",
//     storageBucket: "facebook-api-59e5c.appspot.com",
//     messagingSenderId: "755110168979",
//     appId: "1:755110168979:web:adee74edf0f24a38f18066",
//     measurementId: "G-RCTGK6NHBV"
// };

const stage = process.env.REACT_APP_STAGE;
if (stage === "production") {
    // var firebaseConfig = firebaseConfig_production;
    var firebaseConfig = firebaseConfig_staging;
} else {
    firebaseConfig = firebaseConfig_staging;
}

const app = initializeApp(firebaseConfig);
console.log("Using firebaseConfig: ", stage);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const dbRT = getDatabase();
// export const analytics = getAnalytics(app);
// logEvent(analytics, "notification_received");

// if (location.hostname === "localhost123") {
//     connectFirestoreEmulator(db, "localhost", 8080);
//     connectFunctionsEmulator(functions, "localhost", 5001);
//     connectAuthEmulator(auth, "http://localhost:9099");
//     connectDatabaseEmulator(dbRT, "localhost", 9000);
// }

export default app;