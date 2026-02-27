// js/firebase-config.js
// ⚠️  Replace these values with your own from the Firebase Console
// (Project Settings → Your apps → SDK setup and configuration)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyD79Jq6xNDRMDwpf0pTmM49og9Kp5mn6Fg",

  authDomain: "mc23-hub-test.firebaseapp.com",

  projectId: "mc23-hub-test",

  storageBucket: "mc23-hub-test.firebasestorage.app",

  messagingSenderId: "179580416272",

  appId: "1:179580416272:web:fa99ed49962870bfb87595"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
