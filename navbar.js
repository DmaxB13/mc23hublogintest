function renderNavbar(user, uuid) {
    const nav = document.getElementById("navbar");

    nav.innerHTML = `
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

async function loadNavbar() {
    if (!window.firebaseLoaded) return;

    firebase.auth().onAuthStateChanged(async (user) => {
        if (!user) {
            renderNavbar(null, null);
            return;
        }

        const doc = await firebase.firestore().collection("users").doc(user.uid).get();
        renderNavbar(user, doc.exists ? doc.data().uuid : null);
    });
}

// Wait for firebase to finish loading
document.addEventListener("firebase-ready", loadNavbar);