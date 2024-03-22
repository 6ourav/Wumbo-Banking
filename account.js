const db = firebase.firestore()
const auth = firebase.auth()

auth.onAuthStateChanged(user => {
    if (user) {
        const acc = document.getElementById("acc");
        const bal = document.getElementById("balance");
        const trans_list = document.getElementById("trans-list")
        acc.value = db.collection("users").doc(user.uid).get()
        .then((doc) => {
            if (doc.exists) {
                acc.textContent = doc.data().acc + " Account";
                bal.textContent = 'Balance: $' + doc.data().balance.toFixed(2);

                const dates = doc.data().dates;
                const values = doc.data().values;
                const transactions = doc.data().transactions;

                const zipped = zipArrays(dates, values, transactions).reverse()
                zipped.forEach(tran => {
                    const listItem = document.createElement("li");
                    listItem.textContent = tran.date.toDate().toLocaleDateString('en-US', 
                    {month: '2-digit', day: '2-digit', year: 'numeric'}) + ' | $' + tran.value + ' | ' + tran.transaction
                    trans_list.appendChild(listItem)
                });
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    } else {
       window.location.href = "index.html"

    }
});

function zipArrays(arr1, arr2, arr3) {
    return arr1.map((element, index) => {
        return { 
            date: arr1[index],
            value: arr2[index],
            transaction: arr3[index]
        };
    });
}

document.getElementById('update-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var amount = parseFloat(document.getElementById('amo').value)
    var transaction = document.getElementById('tran').value
    

    const user = auth.currentUser;
    console.log(user.data)
    db.collection("users").doc(user.uid).get()
    .then((doc) => {
        const user_data = doc.data();
        user_data.values.push(amount)
        user_data.transactions.push(transaction)
        user_data.dates.push(firebase.firestore.Timestamp.now())
        const new_data = {
            email: user_data.email,
            acc: user_data.acc,
            balance: user_data.balance + amount,
            dates: user_data.dates,
            transactions: user_data.transactions,
            values: user_data.values
        }
        console.log(new_data)
        db.collection("users").doc(user.uid).set(new_data)
        .then((doc) => {
            window.location.href = "account.html"
        })

    })
    .catch((error) => {
        console.log(error.message);
    });



})