// Firebase Core
document.write('<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"></' + 'script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-auth-compat.js"></' + 'script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore-compat.js"></' + 'script>');

// Initialize Firebase
document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBMg2ffCPVmhI58kvOI3gAenyJHWRc9wME",
        authDomain: "isite-2-test.firebaseapp.com",
        projectId: "isite-2-test",
        storageBucket: "isite-2-test.firebasestorage.app",
        messagingSenderId: "333012577798",
        appId: "1:333012577798:web:0141f6e35a0f9e48eb9d87"
    };

    firebase.initializeApp(firebaseConfig);
});
