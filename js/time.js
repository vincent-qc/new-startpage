const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');
const countdownElement = document.getElementById('countdown');

function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = checkTime(today.getMinutes());
    let meridiem;
    let greeting;

    let diffTime = Difference_In_Time = new Date('2022-05-04') - today;
    let daysLeft = Math.trunc(diffTime / (1000 * 3600 * 24) + 1);

    // Example
    

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

    

    timeElement.innerHTML = ((hours - 12 > 0) ? hours - 12 : (hours == 0) ? 12 : hours) + ":" + minutes + '&nbsp;' + meridiem;
    greetingElement.innerHTML = "Good " + greeting + ",<br>Vincent";
    countdownElement.innerHTML = (daysLeft == 1) ? "Tomorrow..." : (daysLeft < 1) ? "Good Luck." : daysLeft + " Days Left";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

getTime();

setInterval(getTime, 500);