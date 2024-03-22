const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
        // User is logged in, show account button
        document.getElementById('to-account').style.display = 'inline-block';
        document.getElementById('log-out').style.display = 'inline-block';
        document.getElementById('to-login').style.display = 'none';
        document.getElementById('to-register').style.display = 'none';
    } else {
        // User is not logged in, show login and register buttons
        document.getElementById('to-account').style.display = 'none';
        document.getElementById('log-out').style.display = 'none';
        document.getElementById('to-login').style.display = 'inline-block';
        document.getElementById('to-register').style.display = 'inline-block';
    }
});






document.getElementById('log-out').addEventListener('click', function (event) {
    auth.signOut().then(() => {
       window.location.href = "index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
});