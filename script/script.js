const body = document.querySelector("body")
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
const SettingsTitle = document.querySelector('.settings-theme-title')
const settingsName = document.querySelector("#settings-name")
const settingsUserName = document.querySelector("#settings-username")
const settingsBio = document.querySelector("#settings-bio")
const search = document.querySelector('.search')
const searchBox = document.querySelectorAll(".search-box")
const searchButton = document.querySelector('.search-button')
const searchingInput = document.querySelector('.searchingInput')
const searchingButton = document.querySelector('.searchingButton')
const SearchRender = document.querySelector(".search-render")
const LeftBottom = document.querySelector('.left-bottom')
const url = "http://localhost:8080"

function checkScreenChanges() {
    const WindowHeight = parseInt(window.innerHeight) - 140
    rightCenter.style.height = `${WindowHeight}px`
    window.requestAnimationFrame(checkScreenChanges);
}

window.requestAnimationFrame(checkScreenChanges);

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
    window.requestAnimationFrame(checkScreenChanges);
}

function checkTheme() {
    if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"light"`) {
        setTheme('light')
    } else if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
        setTheme('dark')
    } else if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"plus"`) {
        setTheme('plus')
    }
}

checkTheme()

function getUserInfo() {
    settingsName.textContent = JSON.parse(window.localStorage.getItem("userInfo")).name
    settingsUserName.textContent = JSON.parse(window.localStorage.getItem("userInfo")).userName
    if (JSON.parse(window.localStorage.getItem("userInfo")).bio == null) {
        settingsBio.textContent = "Your biography"
    }
}

getUserInfo()

try {
    const userId = JSON.stringify(localStorage.getItem("userId"))
    const userNewId = userId.slice(1, userId.length - 1);
    fetch(`${url}/personal_chat/get-own-chats/${userNewId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (i = 0; i < data.length; i++) {
                const newDiv = document.createElement("div")
                newDiv.className = "render-chats"
                const newImg = document.createElement("img")
                newImg.src = "../images/defaultuser.png"
                const newFullName = document.createElement("h1")
                newFullName.textContent = data[i].users.firstName + " " + data[i].users.secondName
                newDiv.appendChild(newImg)
                newDiv.appendChild(newFullName)
                LeftBottom.appendChild(newDiv)
                if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
                    newDiv.className = "render-chats-dark";
                } else if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"plus"`) {
                    newDiv.className = "render-chats-plus";
                }
            }
        })
} catch (e) {
    console.error(e.message)
}

function openChats() {
    arrowLeft.style.display = "none"
    arrowRight.style.display = "block"
    chats.style.display = "block"
    messages.style.width = "70%"
    search.style.display = "none"
}

function closeChats() {
    arrowLeft.style.display = "block"
    arrowRight.style.display = "none"
    chats.style.display = "none"
    messages.style.width = "100%"
    SettingsBox.style.display = "none"
    search.style.display = "none"
}

function openMessages() {
    if (JSON.parse(localStorage.getItem("isMobile"))) {
        messages.style.display = "block"
        arrowLeftM.style.display = "block"
        arrowRightM.style.display = "none"
        chats.style.display = "none"
        messages.style.width = "100%"
        search.style.display = "none"
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
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            messageText.textContent = createMessage.value + " " + hours + ":" + minutes;
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
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        messageText.textContent = createMessage.value + " " + hours + ":" + minutes;
        createMessage.value = ""
        myMessage.appendChild(messageText)
        rightCenter.appendChild(myMessage)
    }
}

function setTheme(theme) {
    if (theme == 'light') {
        body.style.backgroundColor = "white"
        messages.style.backgroundImage = "url('./images/lighttheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "white"
        rightTop.style.backgroundColor = "#3390ec"
        leftTop.style.backgroundColor = "#3390ec"
        SettingsButton.style.backgroundColor = "#3390ec"
        searchButton.style.backgroundColor = "#3390ec"
        createMessage.style.backgroundColor = "white"
        for (let i = 0; i < searchBox.length; i++) {
            searchBox[i].style.backgroundColor = "#3390ec"
            searchBox[i].style.borderBottom = "1px solid #3390ec"
        }
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
        SettingsTitle.style.color = "#3390ec"
        localStorage.setItem("telegramTheme", 'light');
    } else if (theme == 'dark') {
        body.style.backgroundColor = "#17212B"
        messages.style.backgroundImage = "url('./images/darktheme.png')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "#17212B"
        rightTop.style.backgroundColor = "#0E1621"
        leftTop.style.backgroundColor = "#0E1621"
        SettingsButton.style.backgroundColor = "#0E1621"
        searchButton.style.backgroundColor = "#0E1621"
        createMessage.style.backgroundColor = "#17212B"
        for (let i = 0; i < searchBox.length; i++) {
            searchBox[i].style.backgroundColor = "#0E1621"
            searchBox[i].style.borderBottom = "1px solid #0E1621"
        }
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
        SettingsTitle.style.color = "#3390ec"
        localStorage.setItem("telegramTheme", 'dark');
    } else if (theme == 'plus') {
        body.style.backgroundColor = "#009688"
        messages.style.backgroundImage = "url('./images/plustheme.jpg')";
        SettingsBox.style.display = "none"
        chats.style.display = "block"
        chats.style.backgroundColor = "white"
        rightTop.style.backgroundColor = "#009688"
        leftTop.style.backgroundColor = "#009688"
        SettingsButton.style.backgroundColor = "#009688"
        searchButton.style.backgroundColor = "#009688"
        createMessage.style.backgroundColor = "white"
        for (let i = 0; i < searchBox.length; i++) {
            searchBox[i].style.backgroundColor = "#009688"
            searchBox[i].style.borderBottom = "1px solid #009688"
        }
        for (let i = 0; i < renderAllChats.length; i++) {
            renderAllChats[i].className = "render-chats-plus";
        }
        for (let i = 0; i < myMessages.length; i++) {
            myMessages[i].style.backgroundColor = "#B2E0DE"
            myMessages[i].style.color = "black"
        }
        for (let i = 0; i < otherMessages.length; i++) {
            otherMessages[i].style.backgroundColor = "white"
            otherMessages[i].style.color = "black"
        }
        SettingsBox.style.backgroundColor = "white"
        settingsBack.style.backgroundColor = "white"
        SettingsTitle.style.color = "#009688"
        localStorage.setItem("telegramTheme", 'plus');
    } else {
        console.log("Error! Send name of theme!")
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
            search.style.width = "30%"
        } else if (!isOpen) {
            SettingsBox.style.display = "none"
            chats.style.display = "block"
        } else {
            console.error("Send boolean!")
        }
    }
}

function openSearch(isOpen) {
    if (JSON.parse(localStorage.getItem("isMobile"))) {
        if (isOpen) {
            search.style.display = "block"
            SettingsBox.style.display = "none"
            chats.style.display = "none"
            search.style.width = "100%"
        } else if (!isOpen) {
            search.style.display = "none"
            SettingsBox.style.display = "none"
            chats.style.display = "block"
        } else {
            console.error("Send boolean!")
        }
    } else {
        if (isOpen) {
            search.style.display = "block"
            SettingsBox.style.display = "none"
            chats.style.display = "none"
            search.style.width = "30%"
        } else if (!isOpen) {
            search.style.display = "none"
            SettingsBox.style.display = "none"
            chats.style.display = "block"
        } else {
            console.error("Send boolean!")
        }
    }
}

function sendSearch() {
    let searchValue = "";
    if (searchingInput.value == "") {
        searchingButton.style.backgroundColor = "#EB3942"
    } else if (!searchingInput.value.startsWith("@")) {
        searchValue = "@" + searchingInput.value
    } else {
        searchValue = searchingInput.value
    }
    const userId = JSON.stringify(localStorage.getItem("userId"))
    const userNewId = userId.slice(1, userId.length - 1);
    SearchRender.innerHTML = null
    try {
        fetch(`${url}/personal_chat/search-user/${userNewId}/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                let newCount = document.createElement(`h1`);
                newCount.className = "search-render-count"
                newCount.textContent = "Results found: " + data.length
                if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
                    newCount.style.color = "white";
                }
                SearchRender.appendChild(newCount)
                for (i = 0; i < data.length; i++) {
                    let newDiv = document.createElement(`div`);
                    newDiv.className = "search-render-box";
                    newDiv.value = data[i].id
                    let newFullName = document.createElement(`h1`);
                    newFullName.className = "search-render-fullname"
                    newFullName.textContent = data[i].firstName
                    let newUserName = document.createElement(`p`);
                    newUserName.className = "search-render-username"
                    newUserName.textContent = data[i].username
                    newDiv.appendChild(newFullName)
                    newDiv.appendChild(newUserName)
                    SearchRender.appendChild(newDiv)
                    newDiv.addEventListener("click", () => {
                        const useId = JSON.stringify(localStorage.getItem("userId"))
                        const iUser = userId.slice(1, useId.length - 1);
                        try {
                            fetch(`${url}/personal_chat/create-chat/${iUser}/${newDiv.value}`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                })
                        } catch (e) {
                            console.error(e.message)
                        }
                    })
                }
            })
    } catch (e) {
        console.error(e.message)
    }
}

searchingInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let searchValue = "";
        if (searchingInput.value == "") {
            searchingButton.style.backgroundColor = "#EB3942"
        } else if (!searchingInput.value.startsWith("@")) {
            searchValue = "@" + searchingInput.value
        } else {
            searchValue = searchingInput.value
        }
        const userId = JSON.stringify(localStorage.getItem("userId"))
        const userNewId = userId.slice(1, userId.length - 1);
        SearchRender.innerHTML = null
        try {
            fetch(`${url}/personal_chat/search-user/${userNewId}/${searchValue}`)
                .then(res => res.json())
                .then(data => {
                    let newCount = document.createElement(`h1`);
                    newCount.className = "search-render-count"
                    newCount.textContent = "Results found: " + data.length
                    if (JSON.stringify(localStorage.getItem("telegramTheme")) == `"dark"`) {
                        newCount.style.color = "white";
                    }
                    SearchRender.appendChild(newCount)
                    for (i = 0; i < data.length; i++) {
                        let newDiv = document.createElement(`div`);
                        newDiv.className = "search-render-box";
                        newDiv.value = data[i].id
                        let newFullName = document.createElement(`h1`);
                        newFullName.className = "search-render-fullname"
                        newFullName.textContent = data[i].firstName
                        let newUserName = document.createElement(`p`);
                        newUserName.className = "search-render-username"
                        newUserName.textContent = data[i].username
                        newDiv.appendChild(newFullName)
                        newDiv.appendChild(newUserName)
                        SearchRender.appendChild(newDiv)
                        newDiv.addEventListener("click", () => {
                            const useId = JSON.stringify(localStorage.getItem("userId"))
                            const iUser = userId.slice(1, useId.length - 1);
                            try {
                                fetch(`${url}/personal_chat/create-chat/${iUser}/${newDiv.value}`)
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                    })
                            } catch (e) {
                                console.error(e.message)
                            }
                        })
                    }
                })
        } catch (e) {
            console.error(e.message)
        }
    }
});

const modal = document.getElementById("modal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function logOut() {
    window.localStorage.removeItem("userInfo")
    window.location.reload();
}