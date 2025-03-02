daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function showTime() {
    const currentDate = new Date();

    // add ten days to the current date
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDays = currentDate.getDay();
    const currentDates = currentDate.getDate();
    const currentHrs = currentDate.getHours();
    const currentMins = currentDate.getMinutes();
    const currentSecs = currentDate.getSeconds();
    
    

    const endDate = new Date(currentYear, currentMonth, currentDates + 10, currentHrs +1, currentMins, 0);
    const year = endDate.getFullYear();
    const month = monthArray[endDate.getMonth()];
    const days = daysArray[endDate.getDay()];
    const date = endDate.getDate();    
    const hrs = endDate.getHours();
    const mins = endDate.getMinutes();

    const endDateElement = document.getElementById('endDate');
    endDateElement.textContent = `Giveaway Ends on ${days}, ${date} ${month} ${year} ${hrs}:${mins}`;

    
    const remainingDate = endDate - currentDate /*  miliseconds*/;

    if (remainingDate <= 0) {
        clearInterval(countDown);
        document.querySelector('.timeElements').innerHTML = `<h1>The Giveaway has ended</h1>`;  
        return;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    const remainingDays = Math.floor(remainingDate / oneDay);
    const remainingHrs = Math.floor((remainingDate % oneDay) / oneHour);
    const remainingMins = Math.floor((remainingDate % oneHour) / oneMinute);
    const remainingSecs = Math.floor((remainingDate % oneMinute) / oneSecond);

    let timeElements = document.querySelectorAll('.timeElements h1');
    const remainingDatesArray = [remainingDays, remainingHrs, remainingMins, remainingSecs];

    timeElements.forEach(
        function (timeElement, index) {
            if (`${remainingDatesArray[index]}`.length < 2) {
                remainingDatesArray[index] = `0${remainingDatesArray[index]}`
            }
            timeElement.textContent = remainingDatesArray[index];
        }
    );
}

let countDown = setInterval(showTime, 1000);

showTime();


