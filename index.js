const message = document.getElementById("text");
const sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function() {
    if(message.length > 100) window.alert("Too long");
    else window.alert("Successful!");
}