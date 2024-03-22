
document.getElementById("to-login").addEventListener("click", function () {
    window.location.href = "login.html"
})

document.getElementById("to-register").addEventListener("click", function () {
    window.location.href = "register.html"
})

document.getElementById("to-account").addEventListener("click", function () {
    window.location.href = "account.html"
})

// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log("penis")
//         window.location.href = "account.html"
//     }
// });