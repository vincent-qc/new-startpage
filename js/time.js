const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');

function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = checkTime(today.getMinutes());
    let meridiem;
    let greeting;

    if (hours < 12) {
        meridiem = 'AM';
    } else {
        meridiem = 'PM';
    }

    if(hours > 3 && hours < 12) {
        greeting = "Morning";
    } else if(hours >= 12 && hours < 18) {
        greeting = "Afternoon";
    } else if(hours >= 18 && hours < 20) {
        greeting = "Evening";
    } else {
        greeting = "Night";
    }

    timeElement.innerHTML = ((hours - 12 > 0) ? hours - 12 : hours) + ":" + minutes + '&nbsp;' + meridiem;
    greetingElement.innerHTML = "Good " + greeting + ",<br>Vincent";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

getTime();

setInterval(getTime, 500);