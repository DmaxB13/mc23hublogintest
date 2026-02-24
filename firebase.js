// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBMg2ffCPVmhI58kvOI3gAenyJHWRc9wME",
    authDomain: "isite-2-test.firebaseapp.com",
    projectId: "isite-2-test",
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
