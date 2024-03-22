const db = firebase.firestore()
const auth = firebase.auth()

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("hello")
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    
    auth.signInWithEmailAndPassword(email, password)
    .then((userCred) => {
        console.log(userCred)
        var user = userCred.user
        console.log(user.uid)



        window.location.href = "account.html"

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });

})


auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email)
    } else {
        console.log("user not logged in")

    }
});

