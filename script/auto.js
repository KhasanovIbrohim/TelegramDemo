const div = document.querySelector('.box')

div.style.fontSize = "40px"
div.style.fontWeight = "bolder"

const h1 = document.createElement('h1')
const h2 = document.createElement('h1')
const h3 = document.createElement('h1')
const h4 = document.createElement('h1')
const h5 = document.createElement('h1')
const h6 = document.createElement('h1')

h1.textContent = navigator.product
h2.textContent = navigator.platform 
h3.textContent = navigator.appName
h4.textContent = navigator.appCodeName
h5.textContent = navigator.userAgent
const module = navigator.platform.length + navigator.appName.length + navigator.appCodeName.length + navigator.userAgent.length + navigator.product.length
h6.textContent = "This is your security code: " + module * 123456789 + navigator.platform + navigator.hardwareConcurrency 

div.appendChild(h1)
div.appendChild(h2)
div.appendChild(h3)
div.appendChild(h4)
div.appendChild(h5)
div.appendChild(h6)
