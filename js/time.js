function getTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let amPm;
    let greeting = "Morning";

    m = checkTime(m);

    if(h > 12){
        amPm = "PM";
        h -= 12;
    }else if(h == 12){
        amPm = "PM";
    }else if(h == 0){
        amPm = "AM";
        h = 12;
    }else{
        amPm = "AM";
    }

    const hours = today.getHours();

    if(hours > 3 && hours < 12) {
        greeting = "Morning";
    } else if(hours >= 12 && hours < 18) {
        greeting = "Afternoon";
    } else if(hours >= 18 && hours < 20) {
        greeting = "Evening";
    } else {
        greeting = "Night";
    }

    console.log(h)

    const timeElement = document.getElementById('time');
    timeElement.innerHTML = h + ":" + m + '&nbsp;' + amPm;

    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = "Good " + greeting + ",\nVincent";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

getTime();

setInterval(getTime, 500);