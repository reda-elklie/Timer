const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

// variables for time values
let sec = 0;
let min = 0;
let h = 0;

// variables for leading zero
let leadingSec = 0;
let leadingMin = 0;
let leadingH = 0;

//variable for set interval & timer status
let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    sec++;

    if (sec / 60 === 1) {
        sec = 0;
        min++;

        if (min / 60 === 1) {
            min = 0;
            h++;
        }
    }

    if (sec < 10) {
        leadingSec = "0" + sec.toString();
    } else {
        leadingSec = sec;
    }

    if (min < 10) {
        leadingMin = "0" + min.toString();
    } else {
        leadingMin = min;
    }

    if (h < 10) {
        leadingH = "0" + h.toString();
    } else {
        leadingH = h;
    }

    let displayTimer = document.querySelector(".clock").innerText = leadingH + ":" + leadingMin + ":" + leadingSec;
}

startBtn.addEventListener("click", function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector(".start").innerText = "Pause";
        document.querySelector(".start").style.backgroundColor = "transparent";
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
        document.querySelector(".start").innerText = "Start";
        document.querySelector(".start").style.backgroundColor = "rgba(77, 62, 62, 2)";
    }
});

resetBtn.addEventListener("click", function() {
    sec = 0;
    min = 0;
    h = 0;
    leadingSec = "00";
    leadingMin = "00";
    leadingH = "00";
    document.querySelector(".clock").innerText = leadingH + ":" + leadingMin + ":" + leadingSec;
    if (timerStatus === "started") {
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
        document.querySelector(".start").innerText = "Start";
    }
});
resetBtn.addEventListener("click", function() {

    window.clearInterval(timerInterval);
    sec = 0;
    min = 0
    h = 0
    document.querySelector(".clock").innerHTML = "00:00:00"
})