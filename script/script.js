const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const chats = document.querySelector('.left')
const messages = document.querySelector('.right')
const arrowLeftM = document.querySelector('.arrow-left-m')
const arrowRightM = document.querySelector('.arrow-right-m')

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

var createMessage = document.getElementById("create-message");
const rightCenter = document.querySelector('.right-center')

createMessage.addEventListener("keydown", function(event) {
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

function sendMessageByButton(){
    const myMessage = document.createElement("div")
    myMessage.className = "my-message"
    const messageText = document.createElement("div")
    messageText.textContent = createMessage.value;
    createMessage.value = ""
    myMessage.appendChild(messageText)
    rightCenter.appendChild(myMessage)
}