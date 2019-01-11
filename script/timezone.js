var timerID = setInterval(function() {
  /* get date data */
  now = new Date();
  timezone = now.getTimezoneOffset();
  day = now.getDay();
  hour = now.getUTCHours();
  min = now.getUTCMinutes();
  sec = now.getUTCSeconds();
  ms = now.getUTCMilliseconds();

  /* set dates for citiies with respect to UTC time */ 

  displayTime(hour, min, sec, day, "", -5, "time-nyc", "day-nyc");
  displayTime(hour, min, sec, day, "", -8, "time-la", "day-la");
}, 1000);

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function displayTime(hour, min, sec, day, meridiem, offset, timeId, dayId) {

  /* adjusts hour and day depending on timezone offset */
  hour = hour + offset;
  if (hour < 0) {
    hour = 24 + hour;
    day--;
  } else if (hour >= 24) {
    hour = hour - 24;
    day++;
  }

  

  /* pads integers with extra 0 for formatting */
  if (hour < 10)
    hour = "0" + hour;
  if (min < 10)
    min = "0" + min;
  if (sec < 10)
    sec = "0" + sec;

  /* changes displayed time */
  document.getElementById(timeId).innerHTML = hour + ":" + min + ":" + sec + " " + meridiem;

  /* changes displayed day */
  document.getElementById(dayId).innerHTML = getDay(day);
}

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function getDay(day) {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  if (day > 6) { // accounts for sundays when UTC is saturday
    day = day - 7;
  }
  return days[day];
}