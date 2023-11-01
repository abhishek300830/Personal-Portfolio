import { botToken, chatId} from "./config.js"

let leftArrow = document.getElementById("left-arrow")
let rightArrow = document.getElementById("right-arrow")
let iframes = document.getElementsByClassName("iframe")

let currentFrameIndex = 0

leftArrow.addEventListener('click',function(){

    for (let iframeIndex = 0; iframeIndex < iframes.length; iframeIndex++) {
        iframes[iframeIndex].style.display = "none"
    }

    currentFrameIndex--;
    if (currentFrameIndex < 0){
        currentFrameIndex = 2;
    }
    iframes[currentFrameIndex].style.display = "block"

})


rightArrow.addEventListener("click",function(){
    for (let iframeIndex = 0; iframeIndex < 3; iframeIndex++) {
        iframes[iframeIndex].style.display = "none"
    }

    currentFrameIndex++;

    if (currentFrameIndex >= 3){
        currentFrameIndex = 0;
    }
    iframes[currentFrameIndex].style.display = "block"
})

function sendTelegramMessage(){
    let senderName = document.getElementById("name").value
    let message = document.getElementById("message").value

    if (senderName.length <= 0 || message.length <= 0){
        alert("Name and Message are Required Fields.")
        return
    }
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Name:${senderName}%0AMessage:${message}`

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();

    alert("Message sent Successfully.")
   
}

var typeData = new Typed(".role", {
    strings: [
       "Full Stack Developer",
       "Competitve Programmer",
       "Java Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
 });