const days = document.querySelector('.countdown__daysNumbers');
const hours = document.querySelector('.countdown__hoursNumbers');
const minutes = document.querySelector('.countdown__minutesNumbers');
const seconds = document.querySelector('.countdown__secondsNumbers');

//1 one day 24 hours
//1 hour 60 minutes
//1 minute 60 seconds
//1 second 1000 miliseconds


let date = new Date();
//milliseconds since January 1, 1970, 00:00:00 
let dateSeconds = Date.parse(date);
//let deadlineDate = "2020-12-31";
//let deadline = new Date(deadlineDate);

let deadline = new Date(dateSeconds + (15 * 24 * 60 * 60 * 1000));
let deadlineSeconds = Date.parse(deadline);

let time = deadlineSeconds - dateSeconds;
console.log(date);
console.log(dateSeconds);
console.log(deadline);
console.log(time);

function getRemainder() {
 if (time === 0) {
  alert('countdown stopped')
  clearInterval(countdown);
 } else {
  time = time - 1000;
 }
 let tSeconds = Math.floor((time / (1000)) % 60);
 let tMinutes = Math.floor((time / (1000 * 60)) % 60);
 let tHours = Math.floor((time / (1000 * 60 * 60)) % 24);
 let tDays = Math.floor((time / (1000 * 60 * 60 * 24)));
 seconds.innerHTML = tSeconds;
 minutes.innerHTML = tMinutes;
 hours.innerHTML = tHours;
 days.innerHTML = tDays;
}
//add to show initial clock
getRemainder();
let countdown = setInterval(getRemainder, 1000);





