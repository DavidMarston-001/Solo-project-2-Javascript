let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
const startMinutes = 12;
let time = startMinutes * 60;
const countdown = document.getElementById("Timer")

setInterval(timer, 1000);

function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds <10 ? '0' + seconds : seconds;
    countdown.innerHTML =  `${minutes}:${seconds}`;
    time--;
}

function restart() {
    guestCount = 0
    homeCount = 0
    homeScore.innerText = homeCount
    guestScore.innerText = guestCount

    homeScore.style.color = "#F94F6D";    
    guestScore.style.color = "#F94F6D";  
    
    time = startMinutes * 60
 
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
}

function winner() {
    if (homeCount < guestCount) {
        guestScore.style.color = "#ffc000"; homeScore.style.color = "#F94F6D";    
    } else if (homeCount > guestCount) {
        homeScore.style.color = "#ffc000";  guestScore.style.color = "#F94F6D"; 
    }
}

function home1() {
    homeCount += 1
    homeScore.innerText = homeCount

    winner()
}

function home2() {
    homeCount+= 2
    homeScore.innerText = homeCount

    winner()
}

function home3() {
    homeCount += 3
    homeScore.innerText = homeCount

    winner()
}

function guest1() {
    guestCount += 1
    guestScore.innerText = guestCount

    winner()
}

function guest2() {
    guestCount += 2
    guestScore.innerText = guestCount

    winner()
}

function guest3() {
    guestCount += 3
    guestScore.innerText = guestCount

    winner()
}
