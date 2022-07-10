console.log('Скоро...')

let hours = document.querySelector('.hero__item-hour'),
    minutes = document.querySelector('.hero__item-minutes'),
    seconds = document.querySelector('.hero__item-seconds'),
    days = document.querySelector('.hero__item-days')

function getDistanceSpecifiedTime() {
    let EndTime = new Date("2023, 07, 11");
    let NowTime = new Date();
    let t = EndTime.getTime() - NowTime.getTime();
    let timeDays = Math.floor(t / 1000 / 60 / 60 / 24);
    let timeHours = Math.floor(t / 1000 / 60 / 60 % 24);
    let timeMinutes = Math.floor(t / 1000 / 60 % 60);
    let timeSeconds = Math.floor(t / 1000 % 60);
    if(timeSeconds < 10) { seconds.innerHTML = "0" + timeSeconds.toString().split('.')[0] } else { seconds.innerHTML = timeSeconds.toString().split('.')[0]}
    if(timeMinutes < 10) { minutes.innerHTML = "0" + timeMinutes.toString().split('.')[0] } else { minutes.innerHTML = timeMinutes.toString().split('.')[0] }
    if(timeHours < 10) { hours.innerHTML = "0" + timeHours.toString().split('.')[0] } else { hours.innerHTML = timeHours.toString().split('.')[0] }
    days.innerHTML = timeDays.toString().split('.')[0]
}

setInterval( () => {
    getDistanceSpecifiedTime()
}, 1000)