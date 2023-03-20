// const currentTime = new Date();
// const currentHour = currentTime.getHours.toString().padStart(2, "0");
// const currentMin = currentTime.getMinutes.toString().padStart(2, "0");
// const currentSec = currentTime.getSeconds.toString().padStart(2, "0");

// const formatTime = `${currentHour}:${currentMin}:${currentSec}`;
// console.log(`${formatTime}`);

const currentTime = new Date(Date.now());
const currentHour = currentTime.getHours();

const todaysDate = new Date();
const today = todaysDate.toLocaleDateString();
const todayDiv = document.querySelector("#currentDay");

todayDiv.textContent = today;
