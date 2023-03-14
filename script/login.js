const emailSender = document.querySelector(".login-email")
const emailButton = document.querySelector(".login-button")

const LoginMini = document.querySelector('.loginmini')
const LoginFail = document.querySelector('.loginfailed')
const LoginSeccess = document.querySelector('.loginaccept')

function sendEmail() {
    if (emailSender.value == "") {
        emailButton.style.backgroundColor = "#EB3942"
        emailButton.style.color = "white"
    } else {
        emailButton.style.backgroundColor = "green"
        emailButton.style.color = "white"
        if (emailSender.value == "123") {
            LoginFail.style.display = "block"
            LoginMini.style.display = "none"
            LoginSeccess.style.display = "none"
        } else if (emailSender.value == "321") {
            LoginFail.style.display = "none"
            LoginMini.style.display = "none"
            LoginSeccess.style.display = "block"
        }
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
            if (emailSender.value == "123") {
                LoginFail.style.display = "block"
                LoginMini.style.display = "none"
                LoginSeccess.style.display = "none"
            } else if (emailSender.value == "321") {
                LoginFail.style.display = "none"
                LoginMini.style.display = "none"
                LoginSeccess.style.display = "block"
            }
        }
    }
});

function retryLogin() {
    LoginFail.style.display = "none"
    LoginMini.style.display = "block"
    LoginSeccess.style.display = "none"
    emailSender.value = ""
    emailButton.style.backgroundColor = "white"
    emailButton.style.color = "black"
}