firebase.auth().onAuthStateChanged((user) => {
    window.currentUser = user;
});