const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const chats = document.querySelector('.left')
const messages = document.querySelector('.right')
const arrowLeftM = document.querySelector('.arrow-left-m')
const arrowRightM = document.querySelector('.arrow-right-m')
const SettingsBox = document.querySelector(".settings")
const rightTop = document.querySelector('.right-top')
const leftTop = document.querySelector('.left-top')
const createMessage = document.getElementById("create-message");
const rightCenter = document.querySelector('.right-center')
const SettingsButton = document.querySelector('.settings-button')
const renderAllChats = document.querySelectorAll('.render-chats')
const myMessages = document.querySelectorAll('.my-mini-message')
const otherMessages = document.querySelectorAll('.other-mini-message')
const settingsBack = document.querySelector('.settings-back')
const sendMessageBtn = document.getElementById('send-message')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    chats.style.width = "100%";
    messages.style.display = "none";
    arrowRight.style.display = "none";
    arrowLeft.style.display = "none";
    arrowRightM.style.display = "block";
    arrowLeftM.style.display = "none";
    localStorage.setItem("isMobile", /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
} else {
    arrowRight.style.display = "block";
    arrowLeft.style.display = "none";
    arrowRightM.style.display = "none";
    arrowLeftM.style.display = "none";
    localStorage.setItem("isMobile", /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function checkTheme() {
    if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"light"`) {
        setTheme('light')
    } else if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
        setTheme('dark')
    }
}

checkTheme()

function openChats() {
    arrowLeft.style.display = "none"
    arrowRight.style.display = "block"
    chats.style.display = "block"
    messages.style.width = "70%"
}

function closeChats() {
    arrowLeft.style.display = "block"
    arrowRight.style.display = "none"
    chats.style.display = "none"
    messages.style.width = "100%"
    SettingsBox.style.display = "none"
}

function openMessages() {
    if (JSON.parse(localStorage.getItem("isMobile"))) {
        messages.style.display = "block"
        arrowLeftM.style.display = "block"
        arrowRightM.style.display = "none"
        chats.style.display = "none"
        messages.style.width = "100%"
    } else {
        closeChats()
    }
}

function openChatsM() {
    arrowLeftM.style.display = "none"
    arrowRightM.style.display = "block"
    chats.style.display = "block"
    messages.style.display = "none"
    chats.style.width = '100%'
}

function closeChatsM() {
    arrowLeftM.style.display = "block"
    arrowRightM.style.display = "none"
    chats.style.display = "none"
    messages.style.width = "100%"
}

createMessage.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (createMessage.value == "") {
            sendMessageBtn.style.backgroundColor = "#EB3942"
        } else {
            sendMessageBtn.style.backgroundColor = "#3390ec"
            const myMessage = document.createElement("div")
            myMessage.className = "my-message"
            const messageText = document.createElement("div")
            messageText.textContent = createMessage.value;
            createMessage.value = ""
            myMessage.appendChild(messageText)
            rightCenter.appendChild(myMessage)
        }
    }
});

function sendMessageByButton() {
    if (createMessage.value == "") {
        sendMessageBtn.style.backgroundColor = "#EB3942"
    } else {
        sendMessageBtn.style.backgroundColor = "#3390ec"
        const myMessage = document.createElement("div")
        myMessage.className = "my-message"
        const messageText = document.createElement("div")
        messageText.textContent = createMessage.value;
        createMessage.value = ""
        myMessage.appendChild(messageText)
        rightCenter.appendChild(myMessage)
    }
}

function openSettings(isOpen) {
    if (JSON.parse(localStorage.getItem("isMobile"))) {
        if (isOpen) {
            SettingsBox.style.display = "block"
            chats.style.display = "none"
            SettingsBox.style.width = "100%"
        } else if (!isOpen) {
            SettingsBox.style.display = "none"
            chats.style.display = "block"
        } else {
            console.error("Send boolean!")
        }
    } else {
        if (isOpen) {
            SettingsBox.style.display = "block"
            chats.style.display = "none"
        } else if (!isOpen) {
            SettingsBox.style.display = "none"
            chats.style.display = "block"
        } else {
            console.error("Send boolean!")
        }
    }
}

function setTheme(theme) {
    if (theme == 'light') {
        messages.style.backgroundImage = "url('./images/lighttheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "white"
        rightTop.style.backgroundColor = "#3390ec"
        leftTop.style.backgroundColor = "#3390ec"
        SettingsButton.style.backgroundColor = "#3390ec"
        createMessage.style.backgroundColor = "white"
        for (let i = 0; i < renderAllChats.length; i++) {
            renderAllChats[i].className = "render-chats";
        }
        for (let i = 0; i < myMessages.length; i++) {
            myMessages[i].style.backgroundColor = "#EFFDDE"
            myMessages[i].style.color = "black"
        }
        for (let i = 0; i < otherMessages.length; i++) {
            otherMessages[i].style.backgroundColor = "white"
            otherMessages[i].style.color = "black"
        }
        SettingsBox.style.backgroundColor = "white"
        settingsBack.style.backgroundColor = "white"
        localStorage.setItem("telegramTheme", 'light');
    } else if (theme == 'dark') {
        messages.style.backgroundImage = "url('./images/darktheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "#17212B"
        rightTop.style.backgroundColor = "#0E1621"
        leftTop.style.backgroundColor = "#0E1621"
        SettingsButton.style.backgroundColor = "#0E1621"
        createMessage.style.backgroundColor = "#17212B"
        for (let i = 0; i < renderAllChats.length; i++) {
            renderAllChats[i].className = "render-chats-dark";
        }
        for (let i = 0; i < myMessages.length; i++) {
            myMessages[i].style.backgroundColor = "#2B5278"
            myMessages[i].style.color = "white"
        }
        for (let i = 0; i < otherMessages.length; i++) {
            otherMessages[i].style.backgroundColor = "#182533"
            otherMessages[i].style.color = "white"
        }
        SettingsBox.style.backgroundColor = "#0E1621"
        settingsBack.style.backgroundColor = "#0E1621"
        localStorage.setItem("telegramTheme", 'dark');
    } else {
        console.log("Error! Send name of theme!")
    }
}