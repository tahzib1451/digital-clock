// //digital clock
const clockDom = document.querySelector(".clock");

function clock() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const ampm = hours >= 12 ? 'pm' : 'am';
    formattedHours = twelveHour >= 10 ? twelveHour : '0' + twelveHour;
    formattedMinutes = minutes >= 10 ? minutes : '0' + minutes;
    formattedSeconds = seconds >= 10 ? seconds : '0' + seconds;
    const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    clockDom.textContent = time;
}
const timer = setInterval(() => {
    clock();
}, 1000);

// clearInterval(timer);

// console.log(clock());