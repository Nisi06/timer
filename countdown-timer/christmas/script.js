const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const christmas = "24 Dec 2023";

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const seconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const secondsReal = Math.floor(seconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = secondsReal;
}

countdown();

setInterval(countdown, 1000);
