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

function checkTheme(){
    if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"light"`) {
        setTheme('light')
    } else if(JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
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
        var inputValue = event.target.value;
        const myMessage = document.createElement("div")
        myMessage.className = "my-message"
        const messageText = document.createElement("div")
        messageText.textContent = inputValue;
        createMessage.value = ""
        myMessage.appendChild(messageText)
        rightCenter.appendChild(myMessage)
    }
});

function sendMessageByButton() {
    const myMessage = document.createElement("div")
    myMessage.className = "my-message"
    const messageText = document.createElement("div")
    messageText.textContent = createMessage.value;
    createMessage.value = ""
    myMessage.appendChild(messageText)
    rightCenter.appendChild(myMessage)
}

function openSettings(isOpen) {
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

function setTheme(theme){
    if(theme == 'light') {
        messages.style.backgroundImage = "url('./images/lighttheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "white"
        rightTop.style.backgroundColor = "#3390ec"
        leftTop.style.backgroundColor = "#3390ec"
        SettingsButton.style.backgroundColor = "#3390ec"
        createMessage.style.backgroundColor = "white"
        for(let i = 0; i < renderAllChats.length; i++){
            renderAllChats[i].className = "render-chats";
        }
        localStorage.setItem("telegramTheme", 'light');
    } else if(theme == 'dark') {
        messages.style.backgroundImage = "url('./images/darktheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "#17212B"
        rightTop.style.backgroundColor = "#0E1621"
        leftTop.style.backgroundColor = "#0E1621"
        SettingsButton.style.backgroundColor = "#0E1621"
        createMessage.style.backgroundColor = "#17212B"
        for(let i = 0; i < renderAllChats.length; i++){
            renderAllChats[i].className = "render-chats-dark";
        }
        localStorage.setItem("telegramTheme", 'dark');
    } else {
        console.log("Error! Send name of theme!")
    }
}