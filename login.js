const db = firebase.firestore()
const auth = firebase.auth()

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    
    auth.signInWithEmailAndPassword(email, password)
    .then((userCred) => {
        var user = userCred.user
        
        window.location.href = "account.html"

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });

})

