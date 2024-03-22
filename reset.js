const db = firebase.firestore()
const auth = firebase.auth()

document.getElementById('reset-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value
    
    auth.sendPasswordResetEmail(email)
    .then(() => {

        alert("Check your email")
        // window.location.href = "login.html"

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });

})