const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const chats = document.querySelector('.left')
const messages = document.querySelector('.right')
const arrowChatL = document.querySelector('.arrow-chat-l')
const arrowChatR = document.querySelector('.arrow-chat-r')

function openChats(){
    arrowLeft.style.display = "none"
    arrowRight.style.display = "block"
    chats.style.display = "block"
    messages.style.width = "70%"
}

function closeChats(){
    arrowLeft.style.display = "block"
    arrowRight.style.display = "none"
    chats.style.display = "none"
    messages.style.width = "100%"
}

function openMessages(){
    arrowLeft.style.display = "block"
    arrowRight.style.display = "none"
    chats.style.display = "none"
    messages.style.width = "100%"   
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    chats.style.width = "100%";
    messages.style.display = "none";
} else {
    console.log("OK")
}