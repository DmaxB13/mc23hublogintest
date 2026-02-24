// Load Firebase scripts dynamically
const loadFirebase = async () => {
    const scripts = [
        "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js",
        "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth-compat.js",
        "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore-compat.js"
    ];

    for (const src of scripts) {
        await new Promise((resolve) => {
            const s = document.createElement("script");
            s.src = src;
            s.onload = resolve;
            document.head.appendChild(s);
        });
    }

    // Initialize Firebase AFTER all scripts load
    const firebaseConfig = {
        apiKey: "AIzaSyBMg2ffCPVmhI58kvOI3gAenyJHWRc9wME",
        authDomain: "isite-2-test.firebaseapp.com",
        projectId: "isite-2-test",
        storageBucket: "isite-2-test.firebasestorage.app",
        messagingSenderId: "333012577798",
        appId: "1:333012577798:web:0141f6e35a0f9e48eb9d87"
    };

    firebase.initializeApp(firebaseConfig);
    window.firebaseLoaded = true;

    // Trigger navbar once Firebase is ready
    document.dispatchEvent(new Event("firebase-ready"));
};

loadFirebase();