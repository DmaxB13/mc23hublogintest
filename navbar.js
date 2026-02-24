function renderNavbar(user, uuid) {
    document.getElementById("navbar").innerHTML = `
        <div class="nav-left">
            <button onclick="window.location='index.html'">Home</button>
        </div>

        <div class="nav-right">
            ${
                user
                ? `<img src="https://minotar.net/avatar/${uuid || 'steve'}/64"
                        onclick="window.location='member.html'">`
                : `<button onclick="window.location='login.html'">Login</button>`
            }
        </div>
    `;
}

firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
        renderNavbar(null, null);
        return;
    }

    const doc = await firebase.firestore().collection("users").doc(user.uid).get();

    let uuid = null;
    if (doc.exists) uuid = doc.data().uuid;

    renderNavbar(user, uuid);
});