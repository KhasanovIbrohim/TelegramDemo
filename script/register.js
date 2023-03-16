const firstName = document.getElementById('first_name')
const secondName = document.getElementById('second_name')
const userName = document.getElementById('user_name')
const userEmail = document.getElementById('email')
const url = "http://localhost:8080"

function register() {
    if (firstName.value == "") {
        firstName.style.color = "red"
        firstName.placeholder = "Write name!"
        firstName.style.boxShadow = "0px 0px 1px 4px red"
    } else if (secondName.value == "") {
        secondName.style.color = "red"
        secondName.placeholder = "Write surname!"
        secondName.style.boxShadow = "0px 0px 1px 4px red"
    } else if (userName.value == "") {
        userName.style.color = "red"
        userName.placeholder = "Write username!"
        userName.style.boxShadow = "0px 0px 1px 4px red"
    } else if (userEmail.value == "") {
        userEmail.style.color = "red"
        userEmail.placeholder = "Write email!"
        userEmail.style.boxShadow = "0px 0px 1px 4px red"
    } else {
        try {
            fetch(`${url}/user/sign-up`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "userName": userName.value,
                        "firstName": firstName.value,
                        "secondName": secondName.value,
                        "email": userEmail.value
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        } catch (e) {
            console.error(e.message)
        }
    }
}