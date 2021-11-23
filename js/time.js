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

    if(h > 3 && h < 12) {
        greeting = "Morning";
    } else if(h >= 12 && h < 18) {
        greeting = "Afternoon";
    } else if(h >= 18 && h < 20) {
        greeting = "Evening";
    } else {
        greeting = "Night";
    }

    const timeElement = document.getElementById('time');
    timeElement.innerHTML = h + ":" + m + '&nbsp;' + amPm;

    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = "Good " + greeting + ", Vincent";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

getTime();

setInterval(getTime, 500);