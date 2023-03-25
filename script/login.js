const emailSender = document.querySelector(".login-email")
const emailButton = document.querySelector(".login-button")
const codeGiver = document.querySelector('.code-input')
const codeSender = document.querySelector('.code-button')

const LoginMini = document.querySelector('.loginmini')
const LoginFail = document.querySelector('.loginfailed')
const LoginSeccess = document.querySelector('.loginaccept')
const LoginCode = document.querySelector(".logincode")
const LoginTitle = document.querySelector("#success-title")
const url = "http://localhost:8080"

function sendEmail() {
    if (emailSender.value == "") {
        emailButton.style.backgroundColor = "#EB3942"
        emailButton.style.color = "white"
    } else {
        emailButton.style.backgroundColor = "green"
        emailButton.style.color = "white"
        fetch(`${url}/auth/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": emailSender.value
                })
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("userId", data.object.id);
                if (data.success) {
                    LoginFail.style.display = "none"
                    LoginMini.style.display = "none"
                    LoginSeccess.style.display = "none"
                    LoginCode.style.display = "block"
                } else {
                    LoginFail.style.display = "block"
                    LoginMini.style.display = "none"
                    LoginSeccess.style.display = "none"
                    LoginCode.style.display = "none"
                }
            })
    }
}

emailSender.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (emailSender.value == "") {
            emailButton.style.backgroundColor = "#EB3942"
            emailButton.style.color = "white"
        } else {
            emailButton.style.backgroundColor = "green"
            emailButton.style.color = "white"
            fetch(`${url}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": emailSender.value
                    })
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("userId", data.object.id);
                    if (data.success) {
                        LoginFail.style.display = "none"
                        LoginMini.style.display = "none"
                        LoginSeccess.style.display = "none"
                        LoginCode.style.display = "block"
                    } else {
                        LoginFail.style.display = "block"
                        LoginMini.style.display = "none"
                        LoginSeccess.style.display = "none"
                        LoginCode.style.display = "none"
                    }
                })
        }
    }
});


codeGiver.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (codeGiver.value == "") {
            codeSender.style.backgroundColor = "#EB3942"
            codeSender.style.color = "white"
        } else {
            const userId = JSON.stringify(localStorage.getItem("userId"))
            const userNewId = userId.slice(1, userId.length - 1);
            try {
                fetch(url + `/auth/check/${userNewId}/${codeGiver.value}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            codeSender.style.backgroundColor = "green"
                            codeSender.style.color = "white"
                            LoginFail.style.display = "none"
                            LoginMini.style.display = "none"
                            LoginSeccess.style.display = "block"
                            LoginCode.style.display = "none"
                            LoginCode.style.display = 'none'
                            const userInfo = {
                                email: data.object.email,
                                name: data.object.firstName,
                                surname: data.object.secondName,
                                isOnline: data.object.isOnline,
                                userName: data.object.username,
                                bio: data.object.bio
                            }
                            localStorage.setItem("userInfo", JSON.stringify(userInfo));
                            setTimeout(() => {
                                LoginTitle.textContent = "Welcome " + data.object.firstName + " " + data.object.secondName;
                            }, 2000)
                            setTimeout(() => {
                                window.location = "index.html"
                            }, 4000)
                        } else {
                            LoginCode.style.display = 'none'
                            LoginFail.style.display = "block"
                            LoginMini.style.display = "none"
                            LoginSeccess.style.display = "none"
                            LoginCode.style.display = "none"
                            localStorage.removeItem("userId");
                        }
                    })
            } catch (e) {
                console.error(e.message)
            }
        }
    }
});

function sendCode() {
    if (codeGiver.value == "") {
        codeSender.style.backgroundColor = "#EB3942"
        codeSender.style.color = "white"
    } else {
        const userId = JSON.stringify(localStorage.getItem("userId"))
        const userNewId = userId.slice(1, userId.length - 1);
        try {
            fetch(url + `/auth/check/${userNewId}/${codeGiver.value}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        codeSender.style.backgroundColor = "green"
                        codeSender.style.color = "white"
                        LoginFail.style.display = "none"
                        LoginMini.style.display = "none"
                        LoginSeccess.style.display = "block"
                        LoginCode.style.display = "none"
                        LoginCode.style.display = 'none'
                        const userInfo = {
                            "email": data.object.email,
                            "name": data.object.firstName,
                            "surname": data.object.secondName,
                            "isOnline": data.object.isOnline,
                            "userName": data.object.username,
                            "bio": data.object.bio
                        }
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                        setTimeout(() => {
                            LoginTitle.textContent = "Welcome " + data.object.firstName + " " + data.object.secondName; 
                        }, 2000)
                        setTimeout(() => {
                            window.location = "index.html"
                        }, 4000)
                    } else {
                        LoginCode.style.display = 'none'
                        LoginFail.style.display = "block"
                        LoginMini.style.display = "none"
                        LoginSeccess.style.display = "none"
                        LoginCode.style.display = "none"
                        localStorage.removeItem("userId");
                    }
                })
        } catch (e) {
            console.error(e.message)
        }
    }
}

function retryLogin() {
    LoginFail.style.display = "none"
    LoginMini.style.display = "block"
    LoginSeccess.style.display = "none"
    emailSender.value = ""
    emailButton.style.backgroundColor = "white"
    emailButton.style.color = "black"
    codeGiver.value = ""
    codeSender.style.backgroundColor = "white"
    codeSender.style.color = "black"
    LoginCode.style.display = 'none'
}

function goRegister() {
    window.location = "registration.html"
}