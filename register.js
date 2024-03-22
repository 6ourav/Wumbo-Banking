const db = firebase.firestore()
const auth = firebase.auth()

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log("hello")
    var email = document.getElementById('email').value
    var acc = document.getElementById('acc').value
    var password = document.getElementById('password').value
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCred) => {
        var user = userCred.user
        console.log(user.uid)
        var user_data = {
            email: user.email,
            acc: acc,
            balance: 0,
            dates: [],
            transactions: [], 
            values: []
        }

        db.collection("users").doc(user.uid).set(user_data)


        window.location.href = "account.html"

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });


})