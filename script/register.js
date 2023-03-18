const firstName = document.getElementById('first_name')
const secondName = document.getElementById('second_name')
const userName = document.getElementById('user_name')
const userEmail = document.getElementById('email')
const registerStatus = document.querySelector('.register-status')
const sendUser = document.getElementById("send_user")
const url = "http://localhost:8080"

function register() {
    if (firstName.value == "") {
        firstName.style.color = "red"
        firstName.style.boxShadow = "0px 0px 1px 4px red"
        registerStatus.textContent = "Write name!"
    } else if (secondName.value == "") {
        secondName.style.color = "red"
        secondName.style.boxShadow = "0px 0px 1px 4px red"
        registerStatus.textContent = "Write surname!"
    } else if (userName.value == "") {
        userName.style.color = "red"
        userName.style.boxShadow = "0px 0px 1px 4px red"
        registerStatus.textContent = "Write username!"
    } else if (userEmail.value == "") {
        userEmail.style.color = "red"
        userEmail.style.boxShadow = "0px 0px 1px 4px red"
        registerStatus.textContent = "Write email!"
    } else {
        sendUser.style.background = "gold"
        try {
            const NewuserName = userName.value
            const iUsername = ""
            if (!NewuserName.startsWith("@")) {
                iUsername = "@" + NewuserName
            } else {
                iUsername = NewuserName
            }
            fetch(`${url}/user/sign-up`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "userName": iUsername,
                        "firstName": firstName.value,
                        "secondName": secondName.value,
                        "email": userEmail.value
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.success){
                        sendUser.style.background = "green"
                        window.location = "login.html"
                    }else {
                        sendUser.style.background = "red"
                        registerStatus.textContent = data.message
                    }
                })
        } catch (e) {
            console.error(e.message)
        }
    }
}

function goLogin(){
    window.location = "login.html"
}