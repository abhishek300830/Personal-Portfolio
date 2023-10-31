let leftArrow = document.getElementById("left-arrow")
let rightArrow = document.getElementById("right-arrow")
let iframes = document.getElementsByClassName("iframe")

let currentProjectIndex = 0

leftArrow.addEventListener('click',function(){
    iframes[0].style.display = "none"
    iframes[1].style.display = "none"
    iframes[2].style.display = "none"

    currentProjectIndex--;
    if (currentProjectIndex < 0){
        currentProjectIndex = 2;
    }
    iframes[currentProjectIndex].style.display = "block"

})


rightArrow.addEventListener("click",function(){
    iframes[0].style.display = "none"
    iframes[1].style.display = "none"
    iframes[2].style.display = "none"

    currentProjectIndex++;

    if (currentProjectIndex >= 3){
        currentProjectIndex = 0;
    }
    iframes[currentProjectIndex].style.display = "block"
})



function sendTelegramMessage(){
    let senderName = document.getElementById("name").value
    let message = document.getElementById("message").value

    if (senderName.length <= 0 || message.length <= 0){
        alert("Name and Message are Required Fields.")
        return
    }
    var url = `https://api.telegram.org/bot6438624674:AAHCuMrePz88Prp0sXuvYf2t6b4iEUt9rmc/sendMessage?chat_id=1077711307&text=Name:${senderName}%0AMessage:${message}`

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();

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

// function sendEmail() { 
//     console.log("button clicked")
//     Email.send({ 
//     Host: "smtp.gmail.com", 
//     Username: "anonymoussender3008@gmail.com", 
//     Password: "Sender3008##", 
//     To: 'ak9759250020@gmail.com', 
//     From: "anonymoussender3008@gmail.com", 
//     Subject: "Sending Email using javascript", 
//     Body: "Well that was easy!!", 
//     }) 
//     .then(function (message) { 
//         alert("mail sent successfully") 
//     }); 
// } 
