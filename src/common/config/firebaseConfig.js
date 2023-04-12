import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { environmentVariable } from "../../environment";

const firebaseConfig = {
  apiKey: environmentVariable.REACT_APP_API_KEY,
  authDomain: `${environmentVariable.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: environmentVariable.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
