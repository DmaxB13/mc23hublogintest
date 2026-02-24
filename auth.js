document.addEventListener("firebase-ready", () => {
    firebase.auth().onAuthStateChanged((user) => {
        window.currentUser = user;
    });
});