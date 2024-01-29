function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("/");
        return false;
    }
}
document.onkeydown = redirectCU;

function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours < 10) {
    hours = "0" + hours;
    }
    if (minutes < 10) {
    minutes = "0" + minutes;
    }
    if (seconds < 10) {
    seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = " : " + minutes;
    document.querySelector(".seconds").innerHTML = " : " + seconds;
}

setInterval(updateClock, 1000);

