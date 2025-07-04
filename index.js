// general 

const homeCounter = document.getElementById("home-counter");
const guestCounter = document.getElementById("guest-counter");
const periodCounter = document.getElementById("period-counter");
const timer = document.getElementById("remaining-timer");

let periodCount = 1;
let homeCount = 0;
let guestCount = 0;



/////////// Timer ////////////
let countdown;

function startTimer() {
    clearInterval(countdown); // 先清除舊的 timer
    totalTime = 50 * 60;

    countdown = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timer.textContent = formattedTime;

        if (totalTime <= 0) {
            clearInterval(countdown);
            timer.textContent = "Time Up!";
        }

        totalTime--;
    }, 1000);
}

// 初始啟動
startTimer();

/////////// Counter ////////////
function updateScore(team, points) {
    if (team === 'home') {
        homeCount += points;
        homeCounter.textContent = homeCount;
    } else if (team === 'guest') {
        guestCount += points;
        guestCounter.textContent = guestCount;
    }
    
}

/////////// Reset ////////////
function addPeriod() {
    periodCount += 1;
    periodCounter.textContent = Number(periodCount)
}


function resetGame() {
    addPeriod();
    
    homeCount = 0;
    homeCounter.textContent = 0;
    
    guestCount = 0;
    guestCounter.textContent = 0;
    
    startTimer();
}