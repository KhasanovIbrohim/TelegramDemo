const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const chats = document.querySelector('.left')
const messages = document.querySelector('.right')

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