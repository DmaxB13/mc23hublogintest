firebase.auth().onAuthStateChanged(async (user) => {
    window.currentUser = user;
});