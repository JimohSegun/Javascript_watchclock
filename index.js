const startBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const displayTimer = document.querySelector("#timer");

// variables for time value
let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero
leadingSeconds = 0;
leadingMinutes = 0;
leadingHours = 0;

// variables for interval and timestatus
let interval = false;
let timestatus = "stopped"

function displayWatch(){
    seconds ++;
    if(seconds / 60 === 1 ){
      seconds = 0;
      minutes ++;
    if(minutes / 60 === 1){
      minutes = 0;
      hours ++;
    } 

    }

    if(seconds < 10){
        leadingSeconds= "0" + seconds.toString();
    }else {
        leadingSeconds = seconds;
    } 
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    } 
    if (hours < 10){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = seconds
    }
   displayTimer.textContent = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startBtn.addEventListener("click", function(){
   if (timestatus === "stopped") {
    interval= window.setInterval(displayWatch, 1000);
    startBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timestatus ="started";
   } else {
    window.clearInterval(interval);
    startBtn.innerHTML= `<i class="fa-solid fa-play" id="play"> </i>`;
    timestatus= "stopped";
   }
})

resetBtn.addEventListener("click", function(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours= 0;
    displayTimer.textContent = "00" + ":" + "00" + ":" + "00"
})
