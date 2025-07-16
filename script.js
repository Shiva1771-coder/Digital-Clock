let h1 = document.querySelector("h1");

function getCurrentTime(){
    let date = new Date()
    return date.toLocaleTimeString()
}

setInterval(() => {
    h1.innerHTML = getCurrentTime()
},0);
